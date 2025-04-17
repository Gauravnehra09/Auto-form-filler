document.getElementById('saveBtn').addEventListener('click', () => {
    const userData = {
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value
    };
  
    chrome.storage.sync.set({ userData }, () => {
      alert('Data Saved!');
    });
  });
  
  document.getElementById('fillBtn').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: ['content.js']
      });
    });
  });