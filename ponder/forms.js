const form = document.querySelector("#fsyForm");
const travelRange = document.querySelector("#travelRange");
const notesContainer = document.querySelector("#notesContainer");
const notes = document.querySelector("#notes");
const output = document.querySelector("#output");
const campusBoxes = document.querySelectorAll('input[name="campus"]');

function updateNotesField() {
  const value = travelRange.value;
  if (value === "many") {
    notesContainer.hidden = false;
  }
  else {
    notesContainer.hidden = true;
  }
}

travelRange.addEventListener("change", updateNotesField);
updateNotesField();


// Ensure they choose a date later than the current date
function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}

function getSelectedCampuses() {
  //.from converts a NodeList into a real array, so then you can use .filter and .map
  return Array.from(campusBoxes)
    .filter(box => box.checked)
    .map(box => box.value); 
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.travelRange.value;
  const availableDate = form.availableDate.value;
  const selectedCampuses = getSelectedCampuses();
  const note = form.notes.value.trim();

  // Validate the input
  if (isPastDate(availableDate)) {
    output.textContent = "Please choose a later date.";
    return;
  }
  
  // Let the user know to select at least one campus
  const campusCount = selectedCampuses.length
  if (travelRange.value === "one" && campusCount != 1) {
    output.textContent = "Select a campus.";
    return;
  }

  if (travelRange.value === "many") {
    // Let the user know if they choose many campus but only had one campus selected that they need to choose at least two campuses
    if (campusCount < 2){
      output.textContent = "Select at least two campuses.";
      return;
    }
    
    // Let the user know if they choose many campuses but didn't put a note that they need to add a note
    if (note === "") {
      output.textContent = "Add a note for your travel preferences.";
      return;
    }
  }

  output.innerHTML = `
  <h2>Preference Submitted</h2>
  <p>${firstName} ${lastName}</p>
  <p>Email: ${email}</p>
  <p>Availability: ${availableDate}</p>
  <p>Campuses: ${selectedCampuses.join(", ")}</p>
  <p>Preference Level: ${type}</p>
  `;

  form.reset();
  updateNotesField();
});
          