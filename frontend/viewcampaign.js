const campaignNameForm = document.querySelector("#campaign-name-form");
const campaignNameInput = document.querySelector("#campaign-name");
const campaignNameStatus = document.querySelector("#campaign-name-status");
const campaignStorageKey = "gmspub.campaignName";

try {
  const savedCampaignName = localStorage.getItem(campaignStorageKey);
  if (savedCampaignName) {
    campaignNameInput.value = savedCampaignName;
    document.title = `Game Master Guide | ${savedCampaignName}`;
  }
} catch {
  campaignNameStatus.textContent = "Campaign name storage is unavailable.";
}

campaignNameForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const campaignName = campaignNameInput.value.trim();
  if (!campaignName) {
    campaignNameInput.reportValidity();
    return;
  }

  campaignNameInput.value = campaignName;
  try {
    localStorage.setItem(campaignStorageKey, campaignName);
    campaignNameStatus.textContent = `Campaign name saved as ${campaignName}.`;
  } catch {
    campaignNameStatus.textContent = "Campaign name changed but could not be saved.";
  }
  document.title = `Game Master Guide | ${campaignName}`;
});