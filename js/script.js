// STEP ONE - Focus on load

// Set focus on name field when the page first loads

const nameInput = document.getElementById('name').focus();


// STEP TWO - Job Role Section

// Hide the "text field" with the id of "other-job-role" so it is not displayed when the form first loads.
// Program the "Job Role" <select> element to listen for changes. When a change is detected, display/hide the "text field" based on the selection in the drop-down menu.

const selectTitle = document.getElementById('title');
const otherInput = document.getElementById('other-job-role');
  
    otherInput.style.display = 'none';
  
selectTitle.addEventListener('change', function() {

    if (selectTitle.value === 'other') {
        otherInput.style.display = 'block'; // Show the text field
            } else {
        otherInput.style.display = 'none'; // Hide the text field
        }
    });

// STEP THREE - T-Shirt Info Section

// The options in the "Color" drop-down menu are not available for each t-shirt design, so the user shouldn’t be able to see or choose a color option until they have chosen a design.

document.addEventListener('DOMContentLoaded', function() {
    const designSelect = document.getElementById('design');
    const colorSelect = document.getElementById('color');

    console.log("DOM fully loaded and parsed");

    // Update color options based on the selected design
    function setShirtColorOptions(design) {
        console.log(`Updating color options for design: ${design}`);
        let hasSelected = false; // Flag to track if the first color has been selected

        // Update the visibility and selection of each color option
        for (let i = 0; i < colorSelect.options.length; i++) {
            const option = colorSelect.options[i];
            console.log(`Processing option: ${option.value}, Theme: ${option.dataset.theme}`);
            if (option.dataset.theme === design) {
                option.hidden = false;
                if (!hasSelected) {
                    option.selected = true;
                    hasSelected = true;
                    console.log(`First available color set to selected: ${option.value}`);
                }
            } else {
                option.hidden = true;
                option.selected = false;
            }
        }

        // Update the label and visibility based on whether a design has been selected
        if (design) {
            colorSelect.previousElementSibling.textContent = 'Color:';
            colorSelect.hidden = false;
            colorSelect.focus();  // Focus only if visible and a design is selected
            console.log(`Color select is shown and focused`);
        } else {
            colorSelect.previousElementSibling.textContent = 'Please select a T-shirt theme';
            colorSelect.hidden = true;
            console.log(`Color select is hidden as no design is selected`);
        }
    }

    // Initialize with no options visible - passing 'none' to handle no selection state properly
    setShirtColorOptions('none');

    // Add event listener to the design select dropdown
    designSelect.addEventListener('change', function() {
        const designMap = {
            'js puns': 'js puns',
            'heart js': 'heart js'
        };
        const selectedDesign = designMap[this.value] || 'none';
        console.log(`Design selected: ${this.value}, mapped to: ${selectedDesign}`);
        setShirtColorOptions(selectedDesign);
    });
});


// STEP FOUR - The "Total: $" paragraph below the "Register for Activities" section should update to reflect the total cost of all the selected activities.

// Add an event listener to the "Register for Activities" fieldset element to listen for changes. When a change is detected:

document.addEventListener('DOMContentLoaded', function() {
    const activitiesFieldset = document.getElementById('activities');
    const activityCost = document.getElementById('activities-cost');
    let totalCost = 0; // Initialize total cost to 0

    console.log("Initialized with totalCost = 0");

    activitiesFieldset.addEventListener('change', function(event) {
        // Ensure the event was triggered by a checkbox
        if (event.target.type === 'checkbox') {
            const cost = parseInt(event.target.dataset.cost); // Get the cost of the activity
            console.log(`Checkbox for ${event.target.name} with cost $${cost} was ${event.target.checked ? 'checked' : 'unchecked'}`);


// If an activity is checked, the total cost should increase by the value in the data-cost attribute of the activity’s <input type="checkbox"> element.
// If an activity is unchecked, the total cost should decrease by that amount.


    // Check if the checkbox was checked or unchecked
    if (event.target.checked) {
        totalCost += cost; 
        console.log(`Added $${cost}, new totalCost = $${totalCost}`);
    } else {
        totalCost -= cost;
        console.log(`Subtracted $${cost}, new totalCost = $${totalCost}`);
    }

    // Update the total cost display
        activityCost.textContent = `Total: $${totalCost}`;
        console.log(`Updated display: Total: $${totalCost}`);
        }
    });
});


// STEP FIVE 

/* The credit card payment option should be selected for the user by default. So upon page load "Credit Card" should be the selected option of the select element, and the credit card payment section should be the only payment section displayed on the page. When the user selects a different payment option from the drop-down menu, the form should update to display only the chosen payment method section.

Program the "I'm going to pay with" <select> element to listen for user changes.

When a change is detected, hide all payment sections in the form’s UI except the selected one. */

document.addEventListener('DOMContentLoaded', function() {
    const paymentSelect = document.getElementById('payment');
    const creditCardSection = document.getElementById('credit-card');
    const paypalSection = document.getElementById('paypal');
    const bitcoinSection = document.getElementById('bitcoin');

    // Hide all payment sections
    function hideAllPaymentSections() {
        creditCardSection.style.display = 'none';
        paypalSection.style.display = 'none';
        bitcoinSection.style.display = 'none';
    }

    // Show the appropriate payment section based on the selected payment method
    function showPaymentSection() {
        const selectedMethod = paymentSelect.value;
        hideAllPaymentSections(); 

        if (selectedMethod === 'credit-card') {
            creditCardSection.style.display = 'block';
        } else if (selectedMethod === 'paypal') {
            paypalSection.style.display = 'block';
        } else if (selectedMethod === 'bitcoin') {
            bitcoinSection.style.display = 'block';
        }
    }

    // Set the default payment method 
    paymentSelect.value = 'credit-card';
    showPaymentSection();  

    // Event listener for changes on the payment method select dropdown
    paymentSelect.addEventListener('change', showPaymentSection);
});
