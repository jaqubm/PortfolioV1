contactName = document.getElementById("contact-name");
contactEmail = document.getElementById("contact-email");
contactNumber = document.getElementById("contact-number");
contactMessage = document.getElementById("contact-message");

cancelButton = document.getElementById("contact-cancel");

cancelButton.onclick = function() {
  contactName.value = '';
  contactEmail.value = '';
  contactNumber.value = '';
  contactMessage.value = '';
}

const validateEmail = (contactEmail) => {
  return contactEmail.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};