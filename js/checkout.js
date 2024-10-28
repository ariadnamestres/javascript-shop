
function validate(event) {
  event.preventDefault()
  let error = 0
  let fName = document.getElementById("fName")
  let fEmail = document.getElementById("fEmail")
  let fPassword = document.getElementById("fPassword")
  let fPhone = document.getElementById("fPhone")
  let fLastName = document.getElementById("fLastN")
  let fAddress = document.getElementById("fAddress")
  let errorName = document.getElementById("errorName")
  let errorPassword = document.getElementById("errorPassword")
  let errorEmail = document.getElementById("errorEmail")
  let errorPhone = document.getElementById("errorPhone")
  let errorLastN = document.getElementById("errorLastN")
  let errorAddress = document.getElementById("errorAddress")

  function showError(input, errorDiv, message) {
    error++
    errorDiv.innerHTML = message;
    input.classList.add("is-invalid")
  }

  function clearError(input, errorDiv) {
    errorDiv.innerHTML = ""
    input.classList.remove("is-invalid")
  }

  if (fName.value === "") {
    showError(fName, errorName, "El campo de nombre no puede estar vacío.")
  } else if (fName.value.length <= 2) {
    showError(fName, errorName, "El nombre debe tener al menos tres caracteres.")
  } else if (!/^[A-Za-z]+$/.test(fName.value)) {
    showError(fName, errorName, "El nombre solo puede contener letras.")
  } else {
    clearError(fName, errorName);
  }

  if (fLastName.value === "") {
    showError(fLastName, errorLastN, "El campo de apellido no puede estar vacío.")
  } else if (fLastName.value.length <= 2) {
    showError(fLastName, errorLastN, "El apellido debe tener al menos tres caracteres.")
  } else if (!/^[A-Za-z]+$/.test(fName.value)) {
    showError(fLastName, errorLastN, "el apellido solo puede contener letras.")
  } else {
    clearError(fLastName, errorLastN)
  }

  if (fEmail.value === "") {
    showError(fEmail, errorEmail, "El campo de correo electrónico no puede estar vacío.")
  } else if (fEmail.value.length <= 2) {
    showError(fEmail, errorEmail, "El correo electrónico debe tener al menos tres caracteres.")
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fEmail.value)) {
    showError(fEmail, errorEmail, "El correo electrónico no tiene un formato válido.")
  } else {
    clearError(fEmail, errorEmail);
  }

  if (fPassword.value === "") {
    showError(fPassword, errorPassword, "El campo de contraseña no puede estar vacío.")
  } else if (fPassword.value.length <= 2) {
    showError(fPassword, errorPassword, "La contraseña debe tener al menos tres caracteres.")
  } else if (!/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/.test(fPassword.value)) {
    showError(fPassword, errorPassword, "La contraseña debe tener al menos una letra y un número.")
  } else {
    clearError(fPassword, errorPassword)
  }

  if (fAddress.value === "") {
    showError(fAddress, errorAddress, "El campo de dirección no puede estar vacío.")
  } else if (fAddress.value.length <= 2) {
    showError(fAddress, errorAddress, "La dirección debe tener al menos tres caracteres.")
  } else {
    clearError(fAddress, errorAddress)
  }

  if (fPhone.value === "") {
    showError(fPhone, errorPhone, "El campo de teléfono no puede estar vacío.")
  } else if (fPhone.value.length !== 9) {
    showError(fPhone, errorPhone, "El teléfono debe tener 9 dígitos.")
  } else if (!/^\d+$/.test(fPhone.value)) {
    showError(fPhone, errorPhone, "El teléfono solo puede contener números.")
  } else {
    clearError(fPhone, errorPhone);
  }

  if (error === 0) {
    alert("Formulario enviado correctamente")
  }
}
