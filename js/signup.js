const username = document.getElementById('username');
const password = document.getElementById('password');
const confirmpassword = document.getElementById('confirmpassword'); 
const firstname = document.getElementById('firstname');
const middlename = document.getElementById('middlename');
const lastname = document.getElementById('lastname');
const completeaddress = document.getElementById('address');
const birthdate = document.getElementById('birthdate');
const mobile = document.getElementById('mobile');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
  e.preventDefault(); 

  let isValid = true; 

  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();
  const confirmpasswordValue = confirmpassword.value.trim();
  const firstName = firstname.value.trim();
  const middleName = middlename.value.trim();
  const lastName = lastname.value.trim();
  const userAddress = address.value.trim();
  const userBirthdate = birthdate.value;
  const userMobile = mobile.value.trim();


  if (!usernameValue) {
    alert('Please enter a username');
    isValid = false;
  } else if (!/^[a-zA-Z0-9\s]{4,12}$/.test(usernameValue)) {
    alert('Username must be alphanumeric and have a length between 4-12 characters');
    isValid = false;
  }
  
  if (!passwordValue) {
    alert('Please enter a password');
    isValid = false;
  } else if (!/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$&*-_]).{8,16}$/.test(passwordValue)) {
    alert("Password must be alphanumeric, have a length of 8-16 characters, and contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character (!@#$&*-_).");
    isValid = false;
  }
  
  if (!confirmpasswordValue) {
    alert('Please re-enter your password');
    isValid = false;
  } else if (confirmpasswordValue !== passwordValue) {
    alert('Password does not match');
    isValid = false;
  }
  
  if (!firstName) {
    alert('Please enter your first name');
    isValid = false;
  } else if (!/^[\D]{1,99}$/.test(firstName)) {
    alert("First name must be characters only and no white space characters.");
    isValid = false;
  }
  
  if (!middleName) {
 
  } else if (!/^[\D]{0,99}$/.test(middleName)) {
    alert('Middle name must be characters only');
    isValid = false;
  } 

  if (!lastName) {
    alert('Please enter your last name');
    isValid = false;
  } else if (!/^[\D]{2,99}$/.test(lastName)) {
    alert("Last name must be characters only.");
    isValid = false;
  }
  
  if (!userAddress) {
    alert('Please enter your complete address');
    isValid = false;
  } else if (!/^[a-zA-Z0-9\s]+$/.test(userAddress)) {
    alert("Your complete address should not contain any special characters.");
    isValid = false;
  }
  
  if (!userBirthdate) {
    alert('Please put your birthdate');
    isValid = false;
  } else if (!/^\d{2}-\d{2}-\d{4}$/.test(userBirthdate)) {
    alert("Your birthdate should follow this format [MM-DD-YYYY].");
    isValid = false;
  }
  
  if (!userMobile) {
    alert('Please put your mobile number');
    isValid = false;
  } else if (!/^\d{11}$/.test(userMobile)) {
    alert("Your mobile number should not contain any characters and must have a length of 11 digits.");
    isValid = false;
  } 
  
  if (isValid) {
    alert("Success!");
  } else {
    alert('Please asnwer all fields correctly.')
  }
});