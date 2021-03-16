// Create a variable that selects the form
let formClass = document.querySelector('.form-class')

// Define what happens on form submission
function submitForm (event) {
    event.preventDefault(); // <-- This is the money line
    console.log(`Form submitted!`);
    const name = document.querySelector('#input-name').value;
    console.log(`The name is --> `, name);
  }

// Add the event listner to the form
formClass.addEventListener('submit', submitForm);