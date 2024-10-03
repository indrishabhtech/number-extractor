// Simulated list of contacts
const contacts = [
  { id: 1, name: "John Doe", number: "123-456-7890" },
  { id: 2, name: "Jane Smith", number: "987-654-3210" },
  { id: 3, name: "Mike Johnson", number: "555-666-7777" },
  { id: 4, name: "Anna Lee", number: null },
  { id: 5, name: "Steve Adams", number: null }
];

// Get DOM elements
const homeScreen = document.getElementById('home-screen');
const contactsListScreen = document.getElementById('contacts-list-screen');
const contactDetailsScreen = document.getElementById('contact-details-screen');
const requestPermissionBtn = document.getElementById('request-permission-btn');
const contactsList = document.getElementById('contacts-list');
const backBtn = document.getElementById('back-btn');
const backToContactsBtn = document.getElementById('back-to-contacts-btn');
const searchInput = document.getElementById('search-input');
const sortOptions = document.getElementById('sort-options');
const filterHasPhone = document.getElementById('filter-has-phone');
const contactDetails = document.getElementById('contact-details');

// Global variable to hold filtered and sorted contacts
let filteredContacts = [...contacts];

// Show contacts after permission is "granted"
requestPermissionBtn.addEventListener('click', () => {
  alert('Permission granted!');
  showContactsList();
});

// Show Contacts List
function showContactsList() {
  homeScreen.classList.add('hidden');
  contactsListScreen.classList.remove('hidden');
  renderContacts();
}

// Render contacts based on filters and sorting
function renderContacts() {
  const searchQuery = searchInput.value.toLowerCase();
  const sortOption = sortOptions.value;
  const onlyWithPhone = filterHasPhone.checked;

  // Filter contacts by search query
  filteredContacts = contacts.filter(contact => {
    const matchesSearch = contact.name.toLowerCase().includes(searchQuery);
    const matchesPhoneFilter = !onlyWithPhone || contact.number;
    return matchesSearch && matchesPhoneFilter;
  });

  // Sort contacts
  filteredContacts.sort((a, b) => {
    if (sortOption === 'name-asc') {
      return a.name.localeCompare(b.name);
    } else if (sortOption === 'name-desc') {
      return b.name.localeCompare(a.name);
    }
    return 0;
  });

  // Render the filtered and sorted contacts
  contactsList.innerHTML = '';
  filteredContacts.forEach(contact => {
    const contactItem = document.createElement('div');
    contactItem.className = 'contact-item';
    contactItem.innerHTML = `<div class="contact-name">${contact.name}</div>
                             <div class="contact-number">${contact.number || 'No number available'}</div>`;
    contactItem.addEventListener('click', () => showContactDetails(contact));
    contactsList.appendChild(contactItem);
  });
}

// Show Contact Details screen
function showContactDetails(contact) {
  contactsListScreen.classList.add('hidden');
  contactDetailsScreen.classList.remove('hidden');
  contactDetails.innerHTML = `<p><strong>Name:</strong> ${contact.name}</p>
                              <p><strong>Number:</strong> ${contact.number || 'No number available'}</p>`;
}

// Back button to go back to contact list
backBtn.addEventListener('click', () => {
  contactsListScreen.classList.add('hidden');
  homeScreen.classList.remove('hidden');
});

// Back to contacts list from details
backToContactsBtn.addEventListener('click', () => {
  contactDetailsScreen.classList.add('hidden');
  contactsListScreen.classList.remove('hidden');
});

// Event listeners for search, sort, and filter
searchInput.addEventListener('input', renderContacts);
sortOptions.addEventListener('change', renderContacts);
filterHasPhone.addEventListener('change', renderContacts);
