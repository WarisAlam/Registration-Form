

function validate() {
    event.preventDefault()
    let firstNameInput = document.getElementById('first-name').value
    let lastNameInput = document.getElementById('last-name').value
    let emailInput = document.getElementById('email').value
    let cityInput = document.getElementById('city').value
    let stateInput = document.getElementById('state').value
    let zipInput = document.getElementById('zip').value
    let tnCInput = document.getElementById('tnC').checked

    let error = false
    
    if(firstNameInput){
        document.getElementById('first-name-valid').style.display = 'block'
        document.getElementById('first-name-invalid').style.display = 'none'
    }
    else{
        document.getElementById('first-name-invalid').style.display = 'block'
        document.getElementById('first-name-valid').style.display = 'none'
        error = true
    }

   //lastNAme
    if(lastNameInput){
        document.getElementById('last-name-valid').style.display = 'block'
        document.getElementById('last-name-invalid').style.display = 'none'
    }
    else{
        document.getElementById('last-name-invalid').style.display = 'block'
        document.getElementById('last-name-valid').style.display = 'none'
        error = true
    }
   
    //Email
    if(emailInput &&
         emailInput.includes("@") && 
         emailInput.includes(".") &&
         emailInput.lastIndexOf(".") <= emailInput.length-3 &&
         emailInput.indexOf('@') != 0
         ) {
        document.getElementById('email-valid').style.display = 'block'
        document.getElementById('email-invalid').style.display = 'none'
    }
    else{
        document.getElementById('email-invalid').style.display = 'block'
        document.getElementById('email-valid').style.display = 'none'
        error = true
    }

   //city
    if(cityInput && cityInput.length >= 3){
        document.getElementById('city-valid').style.display = 'block'
        document.getElementById('city-invalid').style.display = 'none'
    }
    else{
        document.getElementById('city-invalid').style.display = 'block'
        document.getElementById('city-valid').style.display = 'none'
        error = true
    }

  //zip
    if(zipInput && zipInput.length === 6 && parseInt(zipInput)){
        document.getElementById('zip-valid').style.display = 'block'
        document.getElementById('zip-invalid').style.display = 'none'
    }
    else{
        document.getElementById('zip-invalid').style.display = 'block'
        document.getElementById('zip-valid').style.display = 'none'
        error = true
    }

    //state codition
    if(stateInput != 'None'){
        document.getElementById('state-valid').style.display = 'block'
        document.getElementById('state-invalid').style.display = 'none'
    }
    else{
        document.getElementById('state-invalid').style.display = 'block'
        document.getElementById('state-valid').style.display = 'none'
        error = true
    }

    //term and codition
    if(tnCInput){
        document.getElementById('tnC-invalid').style.display = 'none'
    }
    else{
        document.getElementById('tnC-invalid').style.display = 'block'
        error = true
    }

    if(!error){
        alert('Your details have been saved successfully!')
        firstNameInput.document.getElementById('first-name').value = ''
        lastNameInput.document.getElementById('last-name').value = ''
        emailInput.document.getElementById('email').value = ''
        cityInput.document.getElementById('city').value = ''
        stateInput. document.getElementById('state').value = 'None'
        zipInput.document.getElementById('zip').value = ''
        tnCInput.document.getElementById('tnC').checked = 'false'

        document.getElementById('first-name-valid').style.display = 'none'
        document.getElementById('last-name-valid').style.display = 'none'
        document.getElementById('email-valid').style.display = 'none'
        document.getElementById('city-valid').style.display = 'none'
        document.getElementById('zip-valid').style.display = 'none'
        document.getElementById('state-valid').style.display = 'none'
    }
}