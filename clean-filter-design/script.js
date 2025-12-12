// Tire Filter JavaScript

// Update tire size display when selects change
document.addEventListener('DOMContentLoaded', function() {
    const widthSelect = document.getElementById('width');
    const heightSelect = document.getElementById('height');
    const customsSelect = document.getElementById('customs');
    const tireSizeText = document.querySelector('.tire-size-text');

    // Function to update tire size display
    function updateTireSize() {
        const width = widthSelect.value;
        const height = heightSelect.value;
        const customs = customsSelect.value;
        tireSizeText.textContent = `${width} / ${height} R${customs}`;
    }

    // Add event listeners to all selects
    widthSelect.addEventListener('change', updateTireSize);
    heightSelect.addEventListener('change', updateTireSize);
    customsSelect.addEventListener('change', updateTireSize);

    // Vehicle type selector
    const vehicleOptions = document.querySelectorAll('.vehicle-option');
    vehicleOptions.forEach(option => {
        const input = option.querySelector('input[type="radio"]');
        input.addEventListener('change', function() {
            vehicleOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');

            // You can add different tire sizes based on vehicle type
            const vehicleType = this.value;
            console.log('Selected vehicle type:', vehicleType);

            // Example: Update available options based on vehicle type
            if (vehicleType === 'motorcycle') {
                // Adjust options for motorcycle
                console.log('Switching to motorcycle tire sizes');
            } else if (vehicleType === 'transporter') {
                // Adjust options for transporter
                console.log('Switching to transporter tire sizes');
            } else {
                // Car tire sizes (default)
                console.log('Switching to car tire sizes');
            }
        });
    });

    // Season selector
    const seasonOptions = document.querySelectorAll('.season-option input[type="radio"]');
    seasonOptions.forEach(option => {
        option.addEventListener('change', function() {
            console.log('Selected season:', this.value);
        });
    });

    // Toggle switch for search type
    const toggleSwitch = document.getElementById('search-type-toggle');
    toggleSwitch.addEventListener('change', function() {
        if (this.checked) {
            console.log('Switched to: By car model');
            // Here you would show/hide different form sections
            // For now, we'll just log it
        } else {
            console.log('Switched to: By size');
        }
    });

    // Help buttons
    const helpButtons = document.querySelectorAll('.help-icon');
    helpButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const helpType = this.classList.contains('service-help') ? 'Service Partner' : 'General';
            alert(`${helpType} Help:\n\nThis would show helpful information about using the tire filter.`);
        });
    });

    // Form submission
    const form = document.getElementById('tireSearchForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = {
            vehicleType: document.querySelector('input[name="vehicle-type"]:checked').value,
            width: widthSelect.value,
            height: heightSelect.value,
            customs: customsSelect.value,
            season: document.querySelector('input[name="season"]:checked').value,
            searchType: toggleSwitch.checked ? 'car-model' : 'size'
        };

        console.log('Form submitted with data:', formData);

        // Here you would typically send this data to a server
        // For now, we'll just show an alert
        alert(`Searching for tires:\n\nSize: ${formData.width}/${formData.height} R${formData.customs}\nSeason: ${formData.season}\nVehicle: ${formData.vehicleType}`);
    });

    // Initialize tire size display
    updateTireSize();
});

// Add smooth animations
document.addEventListener('DOMContentLoaded', function() {
    const filterContainer = document.querySelector('.filter-container');
    filterContainer.style.opacity = '0';
    filterContainer.style.transform = 'translateY(20px)';

    setTimeout(() => {
        filterContainer.style.transition = 'all 0.5s ease';
        filterContainer.style.opacity = '1';
        filterContainer.style.transform = 'translateY(0)';
    }, 100);
});
