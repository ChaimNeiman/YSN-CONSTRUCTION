document.getElementById('sendMessageBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    let isValid = true;

    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const emailAddress = document.getElementById('emailAddress');
    const help = document.getElementById('help');
    
    if (!firstName.value.trim()) {
        firstName.style.border = '2px solid red';
        isValid = false;
    } else {
        firstName.style.border = 'none';
    }
    
    if (!lastName.value.trim()) {
        lastName.style.border = '2px solid red';
        isValid = false;
    } else {
        lastName.style.border = 'none';
    }
    
    if (!emailAddress.value.trim()) {
        emailAddress.style.border = '2px solid red';
        isValid = false;
    } else {
        emailAddress.style.border = 'none';
    }
    
    if (!help.value.trim()) {
        help.style.border = '2px solid red';
        isValid = false;
    } else {
        help.style.border = 'none';
    }
    
    if (isValid) {
        // If all fields are filled, clear the form
        firstName.value = '';
        lastName.value = '';
        emailAddress.value = '';
        help.value = '';
        document.getElementById('messageBox').value = '';
    }
});
