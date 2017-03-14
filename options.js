// Saves options to chrome.storage
function save_options() {
  var loadOriginal = document.getElementById('loadoriginal').checked;
  chrome.storage.sync.set({
    loadOriginal: loadOriginal
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value loadoriginal = true.
  chrome.storage.sync.get({
    loadOriginal: true
  }, function(items) {
    document.getElementById('loadoriginal').checked = items.loadOriginal;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);