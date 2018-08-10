console.log('Add validation!');

document.getElementById('parking-form').addEventListener('submit', function (event) {
    event.preventDefault()

    var field = document.getElementById('name').value.trim()

    if (field === "") {
        showEmptyNameFieldError()
    }

    var daysField = document.getElementById('days-field').value.trim()

    if (daysField === "") {
        showEmptyDaysFieldError()
    }
})
//NAME FIELD
function showEmptyNameFieldError() {
    var errorDiv = document.createElement('div')
    errorDiv.classList.add('input-invalid')
    var field = document.getElementById('name-field')
    field.classList.add('input-invalid')
}
//CAR MAKE-MODEL-FIELD

//DATE PARKING

//NUMBER OF DAYS
function showEmptyDaysFieldError() {
    var errorDiv = document.createElement('div')
    errorDiv.classList.add('input-invalid')
    var field = document.getElementById('days-field')
    field.classList.add('input-invalid')
}

//CREDIT CARD

//CVV

//EXPIRATION


/*
document.getElementById('parking-form').addEventListener('submit', function (event) {
    var inputElements = document.getElementsByTagName ('input')
    for (var input of inputElements) {
        if(input.value.trim() === ('')
}

*/
//function showError(){
// use forEach on the node list to loop througth the array
// field.parentElement.appendChild(errorDiv)


   // clearError()
// innerhtml
//querySelectorAll
/*
  function clearError () {
    var errorMsg = field.parentElement.querySelector('.error-msg') 
    if (errorMsg) {
      errorMsg.remove()
    }
  }
  */