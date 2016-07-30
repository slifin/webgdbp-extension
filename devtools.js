

chrome.devtools.panels.sources.createSidebarPane(
    "Webgdbp",
    function(sidebar) {
  function debug() {
  alert(JSON.stringify(chrome.devtools.panels.sources));
  }
  debug();
  chrome.devtools.panels.sources.onSelectionChanged.addListener(
      debug);
});