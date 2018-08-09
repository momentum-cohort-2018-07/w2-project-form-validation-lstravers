console.log('Add validation!');

document.getElementById('parking-form').addEventListener('submit', function (event) {
    event.preventDefault()

    var name = document.getElementById('name').value.trim()

    if (name === "") {
        showEmptyFieldError()
    }
}
)
    function showEmptyFieldError() {
        var errorDiv = document.createElement('div')
       errorDiv.classList.add('input-invalid') 
        var field = document.getElementById('name-field')
       // field.parentElement.appendChild(errorDiv)
       field.classList.add('input-invalid')
    }   



   // clearError()
// innerhtml

/*
  function clearError () {
    var errorMsg = field.parentElement.querySelector('.error-msg') 
    if (errorMsg) {
      errorMsg.remove()
    }
  }
  */