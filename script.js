console.log('Add validation!');

document.getElementById('parking-form').addEventListener('submit', function (event) {
    event.preventDefault()

    var field = document.getElementById('name').value.trim()
    // var car
    startDateField = document.getElementById('start-date').value.trim()
    //daysField = document.getElementById('days').value.trim()
    //creditCardField = document.getElementById('credit-card').value.trim()
    //cvvField = document.getElementById('cvv').value.trim()
    //expirationField = document.getElementById('expiration').value.trim()

    if (field === "") {                       //NAME FIELD
        showEmptyNameFieldError()
    }
/*
    if (startDateField === "") {             //START DATE FIELD
        showEmptyStartDateFieldError()
    }

    if (daysField === "") {
        show
    }
    if (creditCardField === "") {
        show
    }

    if (cvvField === "") {

    }

    if (expirationField === "") {

    }
*/
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
function showEmptyStartDateFieldError() {
    var errorDiv = document.createElement('div')
    errorDiv.classList.add('input-invalid')
    var startDateField = document.getElementById('start-date')
    startDateField.classList.add('input-invalid')
}

//NUMBER OF DAYS


//CREDIT CARD

//CVV

//EXPIRATION