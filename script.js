username = '';
password = '';

savedUser = {};


// handling login
if (document.getElementById('login-btn')) {
    savedUser = JSON.parse(localStorage.getItem('user'));
    document.getElementById('login-btn').addEventListener('click', () => {
        getLoginData();
        authenticate();
    })

    function getLoginData() {
        username = document.getElementById('login-username').value;
        password = document.getElementById('login-password').value;

        if (!username.trim().length) {
            window.alert('username is empty')
        }
        if (!password.trim().length) {
            window.alert('password is empty')
        }
    }


    function authenticate() {
        if (savedUser.username == username && savedUser.password == password) {
            window.location.href = 'welcome.html'
        } else {
            window.alert('no user found with such username and password.');
        }
    }
}
// **************************8

// handling sogn up
newUser = {};
if (document.getElementById('sign-up-btn')) {
    document.getElementById('sign-up-btn').addEventListener('click', () => {
        getNewUserDetails();
    })

    function getNewUserDetails() {
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let username = document.getElementById('user-name').value;
        let password = document.getElementById('password').value;

        if (!email.trim().length) {
            window.alert('enter email id.')
            return;
        }
        if (!username.trim().length) {
            window.alert('enter username.')
            return;
        }
        if (!password.trim().length) {
            window.alert('enter password.')
            return;
        }

        user = { name, email, username, password };
        localStorage.setItem('user', JSON.stringify(user));
        window.location.href = 'login.html'
    }
}