function validateForm() {
    // Clear any previous error messages
    document.getElementById('nameError').innerHTML = '';
    document.getElementById('contactError').innerHTML = '';
    document.getElementById('gmailError').innerHTML = '';
    document.getElementById('addressError').innerHTML = '';
    document.getElementById('messageError').innerHTML = '';

    let valid = true;

    // Name validation (check for only letters)
    const name = document.getElementById('name').value;
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(name)) {
        document.getElementById('nameError').innerHTML = 'Please enter a valid name (letters only).';
        valid = false;
    }

    // Contact validation (check for valid phone number)
    const contact = document.getElementById('contact').value;
    const contactRegex = /^[0-9]{10}$/;
    if (!contactRegex.test(contact)) {
        document.getElementById('contactError').innerHTML = 'Please enter a valid 10-digit phone number.';
        valid = false;
    }

    // Gmail validation (check for valid email)
    const gmail = document.getElementById('gmail').value;
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!gmailRegex.test(gmail)) {
        document.getElementById('gmailError').innerHTML = 'Please enter a valid email address.';
        valid = false;
    }

    // Address validation (check for empty field)
    const address = document.getElementById('address').value;
    if (address.trim() === '') {
        document.getElementById('addressError').innerHTML = 'Address cannot be empty.';
        valid = false;
    }

    // Message validation (check for empty field)
    const message = document.getElementById('message').value;
    if (message.trim() === '') {
        document.getElementById('messageError').innerHTML = 'Message cannot be empty.';
        valid = false;
    }

    // If form is valid, show success alert and redirect
    if (valid) {
        alert('Form submitted successfully!');
    }

    return valid; // Return false to prevent form submission if invalid
}
