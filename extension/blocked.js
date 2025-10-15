// blocked.js - Metrics tracking for blocked pages

(async function () {
  // Get the current URL to determine which domain was blocked
  const currentUrl = new URL(window.location.href);
  const referrer = document.referrer;
  let blockedDomain = "unknown";

  // First, try to get domain from URL parameters (most reliable)
  const urlParams = new URLSearchParams(currentUrl.search);
  const domainParam = urlParams.get("domain");
  if (domainParam) {
    blockedDomain = decodeURIComponent(domainParam);
  } else if (referrer) {
    // Fallback to referrer if no URL parameter
    try {
      const referrerUrl = new URL(referrer);
      blockedDomain = referrerUrl.hostname.replace("www.", "");
    } catch (e) {
      console.log("Could not parse referrer:", referrer);
    }
  }

  console.log("Blocked domain detection:", {
    urlParams: domainParam,
    referrer: referrer,
    detectedDomain: blockedDomain,
    currentUrl: currentUrl.href,
  });

  // Get current metrics from localStorage
  const metrics = JSON.parse(localStorage.getItem("blockMetrics") || "{}");
  const now = new Date();
  const today = now.toISOString().split("T")[0]; // YYYY-MM-DD format
  const week = getWeekNumber(now);
  const month = now.toISOString().substring(0, 7); // YYYY-MM format

  // Initialize metrics structure if it doesn't exist
  if (!metrics.totalBlocks) metrics.totalBlocks = 0;
  if (!metrics.domainStats) metrics.domainStats = {};
  if (!metrics.dailyStats) metrics.dailyStats = {};
  if (!metrics.weeklyStats) metrics.weeklyStats = {};
  if (!metrics.monthlyStats) metrics.monthlyStats = {};

  // Increment total blocks
  metrics.totalBlocks++;

  // Track per-domain stats
  if (!metrics.domainStats[blockedDomain]) {
    metrics.domainStats[blockedDomain] = {
      count: 0,
      firstBlocked: now.toISOString(),
      lastBlocked: now.toISOString(),
    };
  }
  metrics.domainStats[blockedDomain].count++;
  metrics.domainStats[blockedDomain].lastBlocked = now.toISOString();

  // Track daily stats
  if (!metrics.dailyStats[today]) {
    metrics.dailyStats[today] = { total: 0, domains: {} };
  }
  metrics.dailyStats[today].total++;
  if (!metrics.dailyStats[today].domains[blockedDomain]) {
    metrics.dailyStats[today].domains[blockedDomain] = 0;
  }
  metrics.dailyStats[today].domains[blockedDomain]++;

  // Track weekly stats
  if (!metrics.weeklyStats[week]) {
    metrics.weeklyStats[week] = { total: 0, domains: {} };
  }
  metrics.weeklyStats[week].total++;
  if (!metrics.weeklyStats[week].domains[blockedDomain]) {
    metrics.weeklyStats[week].domains[blockedDomain] = 0;
  }
  metrics.weeklyStats[week].domains[blockedDomain]++;

  // Track monthly stats
  if (!metrics.monthlyStats[month]) {
    metrics.monthlyStats[month] = { total: 0, domains: {} };
  }
  metrics.monthlyStats[month].total++;
  if (!metrics.monthlyStats[month].domains[blockedDomain]) {
    metrics.monthlyStats[month].domains[blockedDomain] = 0;
  }
  metrics.monthlyStats[month].domains[blockedDomain]++;

  // Save updated metrics to localStorage
  localStorage.setItem("blockMetrics", JSON.stringify(metrics));

  // Also update Chrome storage for backward compatibility
  const { blockCount = 0 } = await chrome.storage.local.get("blockCount");
  await chrome.storage.local.set({ blockCount: blockCount + 1 });

  console.log("Block metrics updated:", {
    domain: blockedDomain,
    totalBlocks: metrics.totalBlocks,
    domainCount: metrics.domainStats[blockedDomain].count,
  });

  // Update the page title to show which domain was blocked
  if (blockedDomain !== "unknown") {
    document.title = `${blockedDomain} Blocked - Stay Focused`;
  }

  // Add click handler for statistics button
  const statsBtn = document.getElementById("statsBtn");
  if (statsBtn) {
    statsBtn.addEventListener("click", showDetailedMetrics);
  }
})();

/**
 * Shows detailed metrics in a modal overlay
 */
function showDetailedMetrics() {
  const metrics = JSON.parse(localStorage.getItem("blockMetrics") || "{}");

  // Create modal overlay
  const overlay = document.createElement("div");
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  // Create modal content
  const modal = document.createElement("div");
  modal.style.cssText = `
    background-color: var(--card-bg-color);
    border-radius: 12px;
    padding: 30px;
    max-width: 500px;
    max-height: 80vh;
    overflow-y: auto;
    color: var(--text-primary);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif;
    box-shadow: var(--card-shadow);
    border-top: 6px solid var(--accent-color);
  `;

  // Close button
  const closeBtn = document.createElement("button");
  closeBtn.innerHTML = "×";
  closeBtn.style.cssText = `
    position: absolute;
    top: 15px;
    right: 20px;
    background: none;
    border: none;
    color: var(--text-primary);
    font-size: 28px;
    cursor: pointer;
    padding: 0;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    transition: background-color 0.2s ease;
  `;
  closeBtn.onmouseover = () =>
    (closeBtn.style.backgroundColor = "rgba(0,0,0,0.1)");
  closeBtn.onmouseout = () => (closeBtn.style.backgroundColor = "transparent");
  closeBtn.onclick = () => document.body.removeChild(overlay);

  // Modal content
  const content = document.createElement("div");
  content.innerHTML = `
    <h3 style="margin-top: 0; color: var(--accent-color); font-size: 1.8em;">📊 Detailed Statistics</h3>

    <div style="margin-bottom: 25px;">
      <h4 style="color: var(--text-primary); margin-bottom: 15px; font-size: 1.2em;">📈 Total Blocks: ${
        metrics.totalBlocks || 0
      }</h4>
    </div>

    <div style="margin-bottom: 25px;">
      <h4 style="color: var(--text-primary); margin-bottom: 15px; font-size: 1.1em;">🏆 Top Blocked Domains</h4>
      ${getTopDomainsHTML(metrics.domainStats || {})}
    </div>

    <div style="margin-bottom: 25px;">
      <h4 style="color: var(--text-primary); margin-bottom: 15px; font-size: 1.1em;">📅 Recent Activity</h4>
      ${getRecentActivityHTML(metrics.dailyStats || {})}
    </div>

    <div style="margin-bottom: 25px;">
      <h4 style="color: var(--text-primary); margin-bottom: 15px; font-size: 1.1em;">📊 Weekly Summary</h4>
      ${getWeeklySummaryHTML(metrics.weeklyStats || {})}
    </div>

    <div style="text-align: center; margin-top: 30px;">
      <button onclick="exportMetrics()" style="
        background-color: var(--accent-color);
        color: var(--button-text);
        border: none;
        padding: 10px 20px;
        border-radius: 6px;
        cursor: pointer;
        margin-right: 15px;
        font-weight: 600;
        transition: all 0.2s ease;
      ">📥 Export Data</button>
      <button onclick="clearMetrics()" style="
        background-color: #dc2626;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 6px;
        cursor: pointer;
        font-weight: 600;
        transition: all 0.2s ease;
      ">🗑️ Clear Data</button>
    </div>
  `;

  modal.appendChild(closeBtn);
  modal.appendChild(content);
  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  // Close on overlay click
  overlay.onclick = (e) => {
    if (e.target === overlay) {
      document.body.removeChild(overlay);
    }
  };
}

/**
 * Generates HTML for top blocked domains
 */
function getTopDomainsHTML(domainStats) {
  const domains = Object.entries(domainStats)
    .sort(([, a], [, b]) => b.count - a.count)
    .slice(0, 5);

  if (domains.length === 0) {
    return '<p style="color: var(--text-cite); font-style: italic;">No blocks recorded yet</p>';
  }

  return domains
    .map(
      ([domain, stats]) => `
    <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid var(--quote-border);">
      <span style="color: var(--text-secondary);">${domain}</span>
      <span style="color: var(--accent-color); font-weight: bold;">${stats.count}</span>
    </div>
  `
    )
    .join("");
}

/**
 * Generates HTML for recent activity
 */
function getRecentActivityHTML(dailyStats) {
  const days = Object.entries(dailyStats)
    .sort(([a], [b]) => b.localeCompare(a))
    .slice(0, 7);

  if (days.length === 0) {
    return '<p style="color: var(--text-cite); font-style: italic;">No recent activity</p>';
  }

  return days
    .map(
      ([date, stats]) => `
    <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid var(--quote-border);">
      <span style="color: var(--text-secondary);">${formatDate(date)}</span>
      <span style="color: var(--accent-color); font-weight: bold;">${
        stats.total
      }</span>
    </div>
  `
    )
    .join("");
}

/**
 * Generates HTML for weekly summary
 */
function getWeeklySummaryHTML(weeklyStats) {
  const weeks = Object.entries(weeklyStats)
    .sort(([a], [b]) => b.localeCompare(a))
    .slice(0, 4);

  if (weeks.length === 0) {
    return '<p style="color: var(--text-cite); font-style: italic;">No weekly data</p>';
  }

  return weeks
    .map(
      ([week, stats]) => `
    <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid var(--quote-border);">
      <span style="color: var(--text-secondary);">Week ${week}</span>
      <span style="color: var(--accent-color); font-weight: bold;">${stats.total}</span>
    </div>
  `
    )
    .join("");
}

/**
 * Formats date for display
 */
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year:
      date.getFullYear() !== new Date().getFullYear() ? "numeric" : undefined,
  });
}

/**
 * Exports metrics data as JSON
 */
function exportMetrics() {
  const metrics = JSON.parse(localStorage.getItem("blockMetrics") || "{}");
  const dataStr = JSON.stringify(metrics, null, 2);
  const dataBlob = new Blob([dataStr], { type: "application/json" });

  const link = document.createElement("a");
  link.href = URL.createObjectURL(dataBlob);
  link.download = `site-blocker-metrics-${
    new Date().toISOString().split("T")[0]
  }.json`;
  link.click();
}

/**
 * Clears all metrics data
 */
function clearMetrics() {
  if (
    confirm(
      "Are you sure you want to clear all metrics data? This cannot be undone."
    )
  ) {
    localStorage.removeItem("blockMetrics");
    chrome.storage.local.set({ blockCount: 0 });
    location.reload();
  }
}

// Helper function to get week number
function getWeekNumber(date) {
  const d = new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
  );
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return (
    d.getUTCFullYear() + "-W" + Math.ceil(((d - yearStart) / 86400000 + 1) / 7)
  );
}
