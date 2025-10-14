const list = document.getElementById("list");
const input = document.getElementById("domainInput");
const addBtn = document.getElementById("addBtn");

/**
 * Extracts a clean, blockable hostname from user input.
 * e.g., "https://www.google.com/search" -> "google.com"
 */
function cleanDomain(userInput) {
  let domain = userInput.trim();
  if (!domain) return null;

  // Add a protocol if missing to parse as a valid URL
  if (!domain.startsWith("http://") && !domain.startsWith("https://")) {
    domain = "https://" + domain;
  }

  try {
    let hostname = new URL(domain).hostname;
    // Remove "www." prefix if it exists
    if (hostname.startsWith("www.")) {
      hostname = hostname.substring(4);
    }
    return hostname;
  } catch (e) {
    // Invalid URL
    return null;
  }
}

/**
 * Renders the list of domains in the popup.
 * This function handles creating the <li> elements.
 */
function renderList(blockedDomains = []) {
  list.innerHTML = "";
  if (blockedDomains.length === 0) {
    const li = document.createElement("li");
    li.className = "empty-message";
    li.textContent = "No sites blocked yet. Add one above!";
    list.appendChild(li);
    return;
  }
  blockedDomains.forEach((entry) => {
    // entry: { domain: "example.com", enabled: true }
    const li = document.createElement("li");

    // Toggle switch container
    const toggleContainer = document.createElement("label");
    toggleContainer.className = "toggle-switch";
    toggleContainer.title = entry.enabled
      ? "Disable blocking"
      : "Enable blocking";

    // Hidden checkbox input
    const toggle = document.createElement("input");
    toggle.type = "checkbox";
    toggle.checked = entry.enabled !== false; // default to true

    // Toggle slider
    const toggleSlider = document.createElement("span");
    toggleSlider.className = "toggle-slider";

    // Event handler for toggle
    toggle.onchange = async () => {
      const { blockedDomains: currentDomains = [] } =
        await chrome.storage.sync.get("blockedDomains");
      const updated = currentDomains.map((d) =>
        d.domain === entry.domain ? { ...d, enabled: toggle.checked } : d
      );
      await chrome.storage.sync.set({ blockedDomains: updated });
    };

    // Assemble toggle switch
    toggleContainer.appendChild(toggle);
    toggleContainer.appendChild(toggleSlider);
    li.appendChild(toggleContainer);
    // Domain name
    const domainSpan = document.createElement("span");
    domainSpan.textContent = entry.domain;
    domainSpan.style.flexGrow = "1";
    li.appendChild(domainSpan);
    // Remove button
    const removeBtn = document.createElement("button");
    removeBtn.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg>';
    removeBtn.className = "remove-btn";
    removeBtn.setAttribute("aria-label", "Remove " + entry.domain);
    removeBtn.onclick = async () => {
      const { blockedDomains: currentDomains = [] } =
        await chrome.storage.sync.get("blockedDomains");
      const updated = currentDomains.filter((d) => d.domain !== entry.domain);
      await chrome.storage.sync.set({ blockedDomains: updated });
    };
    li.appendChild(removeBtn);
    list.appendChild(li);
  });
}

/**
 * Loads the domain list from storage and tells renderList to draw it.
 */
async function refreshList() {
  const { blockedDomains = [] } = await chrome.storage.sync.get(
    "blockedDomains"
  );
  // Migrate old format (array of strings) to new format (array of objects)
  if (blockedDomains.length > 0 && typeof blockedDomains[0] === "string") {
    const migrated = blockedDomains.map((d) => ({ domain: d, enabled: true }));
    await chrome.storage.sync.set({ blockedDomains: migrated });
    renderList(migrated);
  } else {
    renderList(blockedDomains);
  }
}

// --- Event Listeners ---

/**
 * Handles the "Add" button click.
 */
addBtn.addEventListener("click", async () => {
  const domain = cleanDomain(input.value);
  if (!domain) {
    input.value = "";
    console.log("Invalid domain input");
    return;
  }
  const { blockedDomains = [] } = await chrome.storage.sync.get(
    "blockedDomains"
  );
  // Check for duplicates
  if (!blockedDomains.some((d) => d.domain === domain)) {
    await chrome.storage.sync.set({
      blockedDomains: [...blockedDomains, { domain, enabled: true }],
    });
  }
  input.value = "";
});

// Allow adding by pressing Enter key in the input field
input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addBtn.click(); // Programmatically click the add button
  }
});

/**
 * This is the key for keeping the popup in sync.
 * It listens for ANY change to storage and re-renders the list.
 */
chrome.storage.onChanged.addListener((changes, area) => {
  if (area === "sync" && changes.blockedDomains) {
    // Re-render the list with the new data
    renderList(changes.blockedDomains.newValue || []);
  }
});

// --- Initial Load ---
// Load and display the list as soon as the popup is opened.
refreshList();
