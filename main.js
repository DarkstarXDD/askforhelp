const formEl = document.querySelector(".form")
const emailInputEl = document.querySelector(".input")
const errorTextEl = document.querySelector(".error")

const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/
let hasInvalidSubmission = false

const isEmailValid = () => {
  return emailPattern.test(emailInputEl.value)
}

const checkValidity = () => {
  return emailInputEl.validity.valid
}

const isValid = () => {
  return isEmailValid() && checkValidity()
}

emailInputEl.addEventListener("input", () => {
  if (hasInvalidSubmission && !isValid()) {
    errorTextEl.innerHTML = "<p>Please enter a valid email</p>"
    emailInputEl.classList.add("invalid")
  } else {
    errorTextEl.innerHTML = ""
    emailInputEl.classList.remove("invalid")
  }
})

formEl.addEventListener("submit", (event) => {
  if (!isValid()) {
    event.preventDefault()
    hasInvalidSubmission = true
    errorTextEl.innerHTML = "<p>Please enter a valid email</p>"
    emailInputEl.classList.add("invalid")
  }
})
