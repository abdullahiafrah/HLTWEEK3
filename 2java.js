const fullname = document.getElementById('fullname');
const form = document.getElementById('form');
const country = document.getElementById('country')
const emailaddress = document.getElementById('emailaddress')
const mobilenumber = document.getElementById('mobilenumber')
const male = document.getElementById('male')
const female = document.getElementById('female')

form.addEventListener('submit', (e) => {
   e.preventDefault()

   checkInput();
});

function checkInput(){

    const fullnameValue = fullname.value.trim();
    const emailaddressValue = emailaddress.value.trim();
    const mobilenumberValue = mobilenumber.value.trim();
    const countryValue = country.value.trim();
    const ismalechecked = male.checked;
    const isfemalechecked = female.checked;

    if(fullnameValue === '') {

        
        setErrorFor(fullname, 'Please enter your name');
    } else {
        setsuccessFor(fullname);
    }
    if(emailaddressValue === '') {

        setErrorFor(emailaddress, 'Please enter your Email');
    } else if(!isEmail(emailaddressValue)) {
        setErrorFor(emailaddress, 'Email is not Valid');
    } else {
        setsuccessFor(emailaddress)
    }
    if(mobilenumberValue === '') {

        setErrorFor(mobilenumber, 'Please enter your mobile number');
    } else {
        setsuccessFor(mobilenumber);
    }
    if(countryValue === 'select'){

        setErrorFor(country, 'Please select your country')
    } else {
        setsuccessFor(country)
    }
    if(ismalechecked) {
        setsuccessFor(male)
    } else if(isfemalechecked) {
        setsuccessFor(female)

    }else {
        setErrorFor(male, 'Please select your Gender');
    }

}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message;

    formControl.className = 'form-control error';
    
}

function setsuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
function isEmail(emailaddress) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailaddress);
}