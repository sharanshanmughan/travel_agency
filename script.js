document.addEventListener('DOMContentLoaded', function () {
    // Initialize the dropdowns
    initializeDropdowns();

    // Set minimum dates for date inputs
    setMinDates();
});

function initializeDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown-container');

    dropdowns.forEach(dropdown => {
        const input = dropdown.querySelector('input[type="text"]');
        const options = dropdown.querySelector('.dropdown-options');

        input.addEventListener('click', function () {
            toggleDropdown(options);
        });

        document.addEventListener('click', function (e) {
            if (!dropdown.contains(e.target)) {
                options.style.display = 'none';
            }
        });
    });
}

function toggleDropdown(options) {
    options.style.display = options.style.display === 'block' ? 'none' : 'block';
}

function selectOption(inputId, value) {
    document.getElementById(inputId).value = value;
    document.querySelector(`#${inputId} ~ .dropdown-options`).style.display = 'none';
}

function setMinDates() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('departure').setAttribute('min', today);
    document.getElementById('return').setAttribute('min', today);
}

function switchTab(tabName) {
    const tabs = document.querySelectorAll('.offer-tabs li');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    const activeTab = Array.from(tabs).find(tab => tab.innerText.trim() === tabName);
    if (activeTab) {
        activeTab.classList.add('active');
    }

    // Implement tab switching logic, like filtering offers, etc.
    console.log(`Switched to ${tabName}`);
}

function openNext() {
	alert("working")
  location.href = "file:///C:/Users/sharan.s/Documents/webtut/packages.html";
}