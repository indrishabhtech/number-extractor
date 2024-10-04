// Simulated list of contacts
const contacts = [
    { name: "John Doe", number: "123-456-7890" },
    { name: "Jane Smith", number: "987-654-3210" },
    { name: "Mike Johnson", number: "555-666-7777" }
  ];
  
  // Get DOM elements
  const homeScreen = document.getElementById('home-screen');
  const contactsListScreen = document.getElementById('contacts-list-screen');
  const requestPermissionBtn = document.getElementById('request-permission-btn');
  const contactsList = document.getElementById('contacts-list');
  const backBtn = document.getElementById('back-btn');
  
  // Function to simulate permission request and navigate to contacts screen
  requestPermissionBtn.addEventListener('click', () => {
    // Simulating permission granted
    alert('Permission granted!');
    showContactsList();
  });
  
  // Function to display the contacts list
  function showContactsList() {
    // Switch screens
    homeScreen.classList.add('hidden');
    contactsListScreen.classList.remove('hidden');
  
    // Populate contacts list
    contactsList.innerHTML = '';
    contacts.forEach(contact => {
      const contactItem = document.createElement('div');
      contactItem.className = 'contact-item';
      contactItem.innerHTML = `<div class="contact-name">${contact.name}</div>
                               <div class="contact-number">${contact.number}</div>`;
      contactsList.appendChild(contactItem);
    });
  }
  
  // Back button functionality
  backBtn.addEventListener('click', () => {
    contactsListScreen.classList.add('hidden');
    homeScreen.classList.remove('hidden');
  });
  