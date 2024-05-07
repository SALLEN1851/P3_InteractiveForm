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

// Initially disable the color dropdown
colorSelect.disabled = true;
colorSelect.previousElementSibling.textContent = 'Please select a T-shirt theme';


    // Update color options based on the selected design
function setShirtColorOptions(design) {
    // Enable the color select only if a valid design is chosen
    colorSelect.disabled = !design;

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
    
    // Update the label based on whether a design has been selected
    colorSelect.previousElementSibling.textContent = design ? 'Color:' : 'Please select a T-shirt theme';
}

// Event listener for changes on the design select dropdown
designSelect.addEventListener('change', function() {
    const designMap = {
        'js puns': 'js puns',
        'heart js': 'heart js'
    };
    const selectedDesign = designMap[this.value] || '';
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


// STEP SIX - 

/* Users shouldn’t be able to submit a form without the required information, or with invalid information. To prevent that from happening, avoid using plugins, libraries, snippets or the built-in HTML5 validation, and create your own custom form validation.

Add an event listener to the form element to listen for the submit event. When the form submission is detected, each required form field or section should be validated to ensure that they have been filled out correctly. If any of the following required fields are not valid, the form submission should be prevented.
The "Name" field cannot be blank or empty.
The "Email Address" field must contain a correctly formatted email address. The email address does not need to be a real email address, just formatted like one. For example brian@teamtreehouse.com. Several characters for the username, preceded by "@", followed by another set of characters, ending with a "." and a couple more characters for the domain name.
The "Register for Activities" section must have at least one activity selected.
If and only if credit card is the selected payment method:
The "Card number" field must contain a 13 - 16 digit credit card number without dashes or spaces. The value does not need to be a real credit card number.
The "Zip code" field must contain a 5-digit number.
The "CVV" field must contain a 3-digit number.

Make the form validation errors obvious to all users. With the custom form validation checks you’ve already written, invalid form fields will prevent the form from submitting, but all users should be presented with clear notifications of which fields are invalid.

When the user tries to submit the form, if a required form field or section is invalid:
Add the ‘.not-valid’ class to the parent element of the form field or section. For the activity section, the parent element would be the fieldset element. For the other required inputs, the parent element would be a label element.
Remove the ‘.valid’ class from the parent element of the form field or section.
Display the .hint element associated with the form field or section.
If a required form field or section is valid:
Add the ‘.valid’ class to the parent element of the form field or section.
Remove the ‘.not-valid’ class from the parent element of the form field or section.
Hide the .hint element associated with that element.
JavaScript alerts and prompts should not be used in your form validation error indications.
If the user tries to submit an empty form, all form validation error indications should be displayed at once, rather than one at a time.*/ 

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');

    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const activitiesCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    const paymentSelect = document.getElementById('payment');
    const creditCardNumber = document.getElementById('cc-num');
    const zipCode = document.getElementById('zip');
    const cvv = document.getElementById('cvv');
    const activitiesFieldset = document.getElementById('activities');

    const nameHint = document.getElementById('name-error');
    const emailHint = document.getElementById('email-error');
    const activitiesHint = document.getElementById('activities-error');
    const creditCardHint = document.getElementById('cc-num-error');
    const zipHint = document.getElementById('zip-error');
    const cvvHint = document.getElementById('cvv-error');

    function showError(inputElement, hintElement) {
        let targetElement = inputElement.parentElement;
        targetElement.classList.add('not-valid');
        targetElement.classList.remove('valid');
        hintElement.style.display = 'block'; 
        inputElement.classList.add('error-border');
        
    }
    
    function hideError(inputElement, hintElement) {
        let targetElement = inputElement.parentElement;
        if (targetElement.classList.contains('not-valid')) {
            targetElement.classList.remove('not-valid');
            targetElement.classList.add('valid');
            hintElement.style.display = 'none';
            inputElement.classList.remove('error-border');
           
        }
    }
    
    function validateForm() {
        let isValid = true;
        console.log('Form submission attempted');

        // Name validation
        if (!nameInput.value.trim()) {
            showError(nameInput, nameHint);
            isValid = false;
        } else {
            hideError(nameInput, nameHint);
        }

        // Email validation
        if (!/^[^@]+@[^@.]+\.[^@]+$/.test(emailInput.value)) {
            showError(emailInput, emailHint);
            isValid = false;
        } else {
            hideError(emailInput, emailHint);
        }

        // Activity validation
        const isActivityChecked = Array.from(activitiesCheckboxes).some(checkbox => checkbox.checked);
        if (!isActivityChecked) {
            showError(activitiesFieldset, activitiesHint);
            isValid = false;
        } else {
            hideError(activitiesFieldset, activitiesHint);
        }

        // Payment method-specific validation
        if (paymentSelect.value === 'credit-card') {
            console.log('Validating credit card information');
            // Credit card number validation
            if (!/^\d{13,16}$/.test(creditCardNumber.value)) {
                showError(creditCardNumber, creditCardHint);
                isValid = false;
            } else {
                hideError(creditCardNumber, creditCardHint);
            }

            // Zip code validation
            if (!/^\d{5}$/.test(zipCode.value)) {
                showError(zipCode, zipHint);
                isValid = false;
            } else {
                hideError(zipCode, zipHint);
            }

            // CVV validation
            if (!/^\d{3}$/.test(cvv.value)) {
                showError(cvv, cvvHint);
                isValid = false;
            } else {
                hideError(cvv, cvvHint);
            }
        }

        return isValid;
    }

    // Attach validation handler to the form's submit event
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const formIsValid = validateForm();
        if (formIsValid) {
            console.log('Validation passed, submitting form.');
            form.submit();
        } else {
            console.log('Validation failed, check errors.');
        }
    });
});


// STEP SEVEN 

/* The Activities Section
Pressing the tab key on your keyboard moves the focus state from one input to the next, but the focus indicators in the "Register for Activities" section aren’t very obvious. To make the form more accessible we'll add visible focus states to these activities. This will give the users that use keyboards to navigate your page a visual confirmation of where they are located.

Program all of the activity checkbox input elements to listen for the focus and blur events.
When the focus event is detected, add the ".focus" class to the checkbox input’s parent label element.
When the blur event is detected, remove the .focus class from the label element that possesses it. It can be helpful here to directly target the element with the className of .focus in order to remove it. */

document.addEventListener('DOMContentLoaded', () => {
    const activityCheckboxes = document.querySelectorAll('#activities input[type="checkbox"]');

    activityCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('focus', (event) => {
            checkbox.parentNode.classList.add('focus');
        });

        checkbox.addEventListener('blur', (event) => {
            checkbox.parentNode.classList.remove('focus');
        });
    });
});