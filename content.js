chrome.storage.sync.get('userData', ({ userData }) => {
    if (!userData) return;
  
    const map = {
      'first name': userData.firstName,
      'last name': userData.lastName,
      'email': userData.email,
      'phone': userData.phone
    };
  
    const inputs = document.querySelectorAll('input');
  
    inputs.forEach(input => {
      const label = input.placeholder?.toLowerCase() || input.name?.toLowerCase() || '';
      for (let key in map) {
        if (label.includes(key)) {
          input.value = map[key];
          break;
        }
      }
    });
  });
  
  