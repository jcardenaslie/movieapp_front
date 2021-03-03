const formRegister = document.getElementById("form-register")
const username = document.getElementById("inputUsername")
const email = document.getElementById("inputEmail")
const password = document.getElementById("inputPassword")
const passwordConfirm = document.getElementById("inputPasswordConfirm")

formRegister.addEventListener("submit", (event) => {
  event.preventDefault()
  console.log("Form Submit");

  const registration = {
    username: username.value,
    email: email.value,
    password: password.value,
    passwordConfirm: passwordConfirm.value
  }
  
  if (registration.password.length < 4) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Password is to short! Try more than 4 characters!',
      footer: '<a href>contact support?</a>'
    })
    return
  }
  if (registration.password !==  registration.passwordConfirm) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Passwords do not match!',
      footer: '<a href>contact support?</a>'
    })
    return
  }

  register(registration)
})