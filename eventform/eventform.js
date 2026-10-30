const form = document.querySelector("#fsyForm");
const clientTypeChoice = document.querySelector("#clientType")
const studentIdContainer = document.querySelector("#studentId");
const accessCodeContainer = document.querySelector("#accessCode");
const studentId = document.querySelector("#id");
const accessCode = document.querySelector("#code");
const output = document.querySelector("#output");

function updateHiddenFields() {
  const value = clientTypeChoice.value;
  if (value === "student") {
    studentIdContainer.hidden = false;
    accessCodeContainer.hidden = true;
  }
  else if (value === "guest"){
    studentIdContainer.hidden = true;
    accessCodeContainer.hidden = false;
  }
  else {
    studentIdContainer.hidden = true;
    accessCodeContainer.hidden = true;
  }
}

clientTypeChoice.addEventListener("change", updateHiddenFields);
updateHiddenFields();


// Ensure they choose a date later than the current date
function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.clientType.value;
  const eventDate = form.eventDate.value;
  const id = form.id.value.trim();
  const code = form.code.value.trim();

  // Validate the input
  if (isPastDate(eventDate)) {
    output.textContent = "Please choose a later date.";
    return;
  }
  
  // Let the user know to choose a client type
  if (type === "") {
    output.textContent = "You must select a type.";
    return;
  }
  // Let the user know their I-number must be 9 numbers
  if (type === "student" && id.length != 9) {
    output.textContent = "Student I# must be 9 digits.";
    return;
  }
  // Let the user know they must enter a valid code (and it's case sensitive)
  if (type === "guest" && code.toUpperCase() != "EVENT131") {
    output.textContent = "You have entered an invalid access code. Try again.";
    return;
  }

  output.innerHTML = `
  <h2>Ticket Created</h2>
  <p>${firstName} ${lastName}</p>
  <p>${type}</p>
  <p>${eventDate}</p>
  `;

  form.reset();
  updateHiddenFields();
});
          