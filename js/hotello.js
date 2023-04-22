/*
function verfyContact() {
  const form = document.querySelector("#contact form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const checkbox = document.querySelector("#checkpolicy");

form.addEventListener("submit", (event) => {
  // Check if name, email, and message fields are filled
  if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
    event.preventDefault();
    alert('Please fill in all required fields.');
  }

  // Check email format
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value)) {
    alert("Please enter a valid email address.");
    event.preventDefault();
    return;
  }

  // Check if checkbox is checked
  if (!checkbox.checked) {
    alert("Please accept the privacy policy.");
    event.preventDefault();
    return;
  }

  // Form is valid, submit it
  alert("Form submitted successfully!");
});
}
*/

function flip() {

  let box = document.querySelector('#box6');
  document.querySelector("#flip6").addEventListener( 'click' ,function() {
  
      box.style.display = 'transform: translate(100%) rotateY(-180deg)';
     
  } ) 

}