document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email && password) {
        window.location.href = 'home.html';
    } else {
        alert('Please enter both email and password.');
    }
});