// STEP ONE
// set focus on name field when the page first loads

const nameInput = document.getElementById('name').focus();


// STEP TWO
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

// STEP THREE
// The options in the "Color" drop-down menu are not available for each t-shirt design, so the user shouldn’t be able to see or choose a color option until they have chosen a design.