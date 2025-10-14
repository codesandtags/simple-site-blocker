// background.js

const RULE_ID = 1337;
// This is the common list of domains that generate most of distractions
const DEFAULT_DOMAINS = ["facebook.com", "tiktok.com", "instagram.com"];

// On first install, populate storage with default domains
chrome.runtime.onInstalled.addListener(async (details) => {
  // Check if blockedDomains is already set
  const { blockedDomains } = await chrome.storage.sync.get("blockedDomains");

  // Only set if it's undefined (a true first install)
  if (typeof blockedDomains === "undefined") {
    const defaultDomains = [...DEFAULT_DOMAINS];
    await chrome.storage.sync.set({ blockedDomains: defaultDomains });
  }
});
// ------------------------------

async function updateBlockingRules(domains) {
  // Support both old (string) and new (object) formats
  let domainObjs = Array.isArray(domains) ? domains : [];
  if (domainObjs.length > 0 && typeof domainObjs[0] === "string") {
    domainObjs = domainObjs.map((d) => ({ domain: d, enabled: true }));
  }
  // Only block enabled domains
  const enabledDomains = domainObjs.filter((d) => d.enabled !== false);
  const removeRuleIds = Array.from({ length: 1000 }, (_, i) => i + 1);
  const addRules = enabledDomains.map((entry, idx) => ({
    id: idx + 1,
    priority: 1,
    action: {
      type: "redirect",
      redirect: {
        extensionPath: `/blocked.html?domain=${encodeURIComponent(
          entry.domain
        )}`,
      },
    },
    condition: {
      urlFilter: `*${entry.domain}*`,
      resourceTypes: ["main_frame"],
    },
  }));
  await chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds,
    addRules,
  });
  console.log(
    "Updated blocking rules:",
    enabledDomains.map((d) => d.domain)
  );
}

// Initial load (this logic stays the same)
chrome.storage.sync.get(["blockedDomains"], (result) => {
  updateBlockingRules(result.blockedDomains || []);
});

// Listen for changes (this logic stays the same)
chrome.storage.onChanged.addListener((changes, area) => {
  if (area === "sync" && changes.blockedDomains) {
    updateBlockingRules(changes.blockedDomains.newValue || []);
  }
});
