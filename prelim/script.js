// Sample data for dynamic rendering of campaigns and events
const campaigns = [
    { title: 'Blood Donation Drive', description: 'Join us to donate blood and save lives.' },
    { title: 'Disaster Relief Fund', description: 'Support the victims of natural disasters.' },
    { title: 'First Aid Training', description: 'Learn life-saving first aid skills.' }
];

const events = [
    { title: 'Blood Donation Event', date: 'March 15, 2026', location: 'Manila' },
    { title: 'Disaster Relief Fundraiser', date: 'April 5, 2026', location: 'Quezon City' },
];

// Function to render dynamic content for campaigns
function renderCampaigns() {
    const campaignList = document.getElementById('campaignList');
    campaigns.forEach(campaign => {
        const div = document.createElement('div');
        div.classList.add('campaign');
        div.innerHTML = `<h3>${campaign.title}</h3><p>${campaign.description}</p>`;
        campaignList.appendChild(div);
    });
}

// Function to render dynamic event list
function renderEvents() {
    const eventList = document.getElementById('eventList');
    events.forEach(event => {
        const div = document.createElement('div');
        div.classList.add('event');
        div.innerHTML = `<h3>${event.title}</h3><p>${event.date} - ${event.location}</p>`;
        eventList.appendChild(div);
    });
}

// Call the functions to render content
renderCampaigns();
renderEvents();

// Form validation for volunteer sign-up
document.getElementById('volunteerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const errorMessage = document.getElementById('error-message');

    if (!name || !email || !phone) {
        errorMessage.textContent = "All fields are required!";
        errorMessage.style.display = "block";
        return;
    }

    // Save volunteer data to LocalStorage (for demo purposes)
    localStorage.setItem('volunteer', JSON.stringify({ name, email, phone }));

    alert("Thank you for signing up!");
    // Clear form after submission
    document.getElementById('volunteerForm').reset();
});
// JavaScript Validation for Blood Donation Form
function validateBloodDonation() {
    const name = document.getElementById('full-name').value;
    const age = document.getElementById('age').value;
    const bloodType = document.getElementById('blood-type').value;
    const contactNumber = document.getElementById('contact-number').value;
    const email = document.getElementById('email').value;

    if (!name || !age || !bloodType || !contactNumber || !email) {
        alert("Please fill in all required fields for the Blood Donation Drive.");
        return false; // Prevent form submission
    }

    if (age < 18 || age > 65) {
        alert("You must be between 18 and 65 years old to donate blood.");
        return false;
    }

    alert("Thank you for registering for the Blood Donation Drive!");
    return true;
}

// JavaScript Validation for Disaster Relief Fund Form
function validateDisasterRelief() {
    const donorName = document.getElementById('donor-name').value;
    const donationAmount = document.getElementById('donation-amount').value;
    const email = document.getElementById('contact-email').value;
    const paymentMethod = document.getElementById('payment-method').value;

    if (!donorName || !donationAmount || !email || !paymentMethod) {
        alert("Please fill in all required fields for the Disaster Relief Fund Donation.");
        return false; // Prevent form submission
    }

    if (donationAmount <= 0) {
        alert("Please enter a valid donation amount.");
        return false;
    }

    alert("Thank you for your generous donation to the Disaster Relief Fund!");
    return true;
}
