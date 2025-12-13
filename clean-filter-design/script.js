// Tire Filter JavaScript - Enhanced Version

document.addEventListener('DOMContentLoaded', function() {

    // ===== UPDATE TIRE SIZE DISPLAY =====
    const widthSelect = document.getElementById('width');
    const heightSelect = document.getElementById('height');
    const customsSelect = document.getElementById('customs');
    const tireSizeText = document.querySelector('.tire-size-text');

    // Function to update tire size display with animation
    function updateTireSize() {
        const width = widthSelect.value;
        const height = heightSelect.value;
        const customs = customsSelect.value;

        // Add pulse animation
        tireSizeText.style.transform = 'translate(-50%, -50%) scale(1.1)';

        setTimeout(() => {
            tireSizeText.innerHTML = `
                <span class="size-highlight">${width}</span>
                <span class="size-separator">/</span>
                <span class="size-highlight">${height}</span>
                <span class="size-separator">R</span>
                <span class="size-highlight">${customs}</span>
            `;
            tireSizeText.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 150);
    }

    // Add event listeners to all selects
    widthSelect.addEventListener('change', updateTireSize);
    heightSelect.addEventListener('change', updateTireSize);
    customsSelect.addEventListener('change', updateTireSize);

    // Add change effect for selects
    [widthSelect, heightSelect, customsSelect].forEach(select => {
        select.addEventListener('change', function() {
            this.style.transform = 'scale(1.05)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });

    // ===== SEASON SELECTOR =====
    const seasonOptions = document.querySelectorAll('.season-option input[type="radio"]');
    seasonOptions.forEach(option => {
        option.addEventListener('change', function() {
            console.log('Selected season:', this.value);

            // Add visual feedback
            const label = this.nextElementSibling;
            label.style.transform = 'scale(1.1)';
            setTimeout(() => {
                label.style.transform = 'scale(1)';
            }, 300);
        });
    });

    // ===== TOGGLE SWITCH =====
    const toggleSwitch = document.getElementById('search-type-toggle');
    toggleSwitch.addEventListener('change', function() {
        if (this.checked) {
            console.log('Switched to: By car model');
            // Future: Show car model search form
        } else {
            console.log('Switched to: By size');
            // Future: Show size search form
        }
    });

    // ===== HELP BUTTON =====
    const helpButton = document.querySelector('.help-icon');
    if (helpButton) {
        helpButton.addEventListener('click', function(e) {
            e.preventDefault();

            // Create a custom modal/tooltip
            const helpMessage = `
                <strong>How to find your tire size:</strong><br><br>
                Look at the sidewall of your tire. You'll find a series of numbers like:<br>
                <strong>205/55 R16</strong><br><br>
                • <strong>205</strong> = Width in millimeters<br>
                • <strong>55</strong> = Height (aspect ratio)<br>
                • <strong>R16</strong> = Rim diameter in inches
            `;

            alert('HOW TO FIND YOUR TIRE SIZE:\n\n' +
                  'Look at the sidewall of your tire. You\'ll find numbers like: 205/55 R16\n\n' +
                  '• 205 = Width in millimeters\n' +
                  '• 55 = Height (aspect ratio)\n' +
                  '• R16 = Rim diameter in inches');
        });
    }

    // ===== FORM SUBMISSION =====
    const form = document.getElementById('tireSearchForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = {
            vehicleType: 'car',
            width: widthSelect.value,
            height: heightSelect.value,
            customs: customsSelect.value,
            season: document.querySelector('input[name="season"]:checked').value,
            searchType: toggleSwitch.checked ? 'car-model' : 'size'
        };

        console.log('Form submitted with data:', formData);

        // Add loading animation to button
        const submitBtn = document.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'SEARCHING...';
        submitBtn.style.opacity = '0.7';
        submitBtn.disabled = true;

        // Simulate search (replace with actual API call)
        setTimeout(() => {
            alert(`🔍 Searching for tires:\n\n` +
                  `Size: ${formData.width}/${formData.height} R${formData.customs}\n` +
                  `Season: ${formData.season}\n` +
                  `Vehicle: ${formData.vehicleType.toUpperCase()}\n\n` +
                  `Found 47 matching tires!`);

            submitBtn.textContent = originalText;
            submitBtn.style.opacity = '1';
            submitBtn.disabled = false;
        }, 1500);
    });

    // ===== ENHANCED ANIMATIONS =====

    // Entrance animation
    const filterContainer = document.querySelector('.filter-container');
    filterContainer.style.opacity = '0';
    filterContainer.style.transform = 'translateY(30px) scale(0.95)';

    setTimeout(() => {
        filterContainer.style.transition = 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        filterContainer.style.opacity = '1';
        filterContainer.style.transform = 'translateY(0) scale(1)';
    }, 100);

    // Add hover effect to form fields
    const formFields = document.querySelectorAll('.form-field');
    formFields.forEach(field => {
        field.addEventListener('mouseenter', function() {
            this.querySelector('label').style.transform = 'scaleX(1.02)';
        });

        field.addEventListener('mouseleave', function() {
            this.querySelector('label').style.transform = 'scaleX(1)';
        });
    });

    // Add rotation effect to tire on hover
    const tireGraphic = document.querySelector('.tire-graphic');
    const tireSVG = document.querySelector('.tire-svg');
    let rotationAngle = 0;
    let isRotating = false;

    tireGraphic.addEventListener('mouseenter', function() {
        if (!isRotating) {
            isRotating = true;
            rotateTire();
        }
    });

    tireGraphic.addEventListener('mouseleave', function() {
        isRotating = false;
    });

    function rotateTire() {
        if (isRotating) {
            rotationAngle += 2;
            tireSVG.style.transform = `rotate(${rotationAngle}deg)`;
            requestAnimationFrame(rotateTire);
        } else {
            // Smooth return to 0
            const returnInterval = setInterval(() => {
                rotationAngle -= 5;
                if (rotationAngle <= 0) {
                    rotationAngle = 0;
                    clearInterval(returnInterval);
                }
                tireSVG.style.transform = `rotate(${rotationAngle}deg)`;
            }, 16);
        }
    }

    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        // Tab through options more smoothly
        const focusedElement = document.activeElement;

        if (focusedElement.tagName === 'SELECT') {
            focusedElement.parentElement.style.transform = 'translateY(-5px)';
            setTimeout(() => {
                focusedElement.parentElement.style.transform = 'translateY(0)';
            }, 200);
        }
    });

    // Add subtle parallax effect
    document.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        const tireDisplay = document.querySelector('.tire-display');
        const offsetX = (mouseX - 0.5) * 20;
        const offsetY = (mouseY - 0.5) * 20;

        tireGraphic.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });

    // Initialize tire size display
    updateTireSize();

    // Add console message
    console.log('%c🚗 Tire Filter Loaded Successfully! 🚗',
                'color: #ff8c00; font-size: 16px; font-weight: bold;');
    console.log('%cEnhanced with smooth animations and interactive features',
                'color: #666; font-size: 12px;');
});
