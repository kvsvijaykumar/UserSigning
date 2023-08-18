const users = [
    {
        username: 'Vijay',
        password: 'Vijay@12345'
    },
    {
        username: 'Vinay',
        password: 'Vinay@31214'
    },
    {
        username: 'Lokesh',
        password: 'Lokesh#12121'
    }
];

function newUserAdding(username,password){
    users.push({
        username : username,
        password : password
    });
}

// Function to store username in local storage
function storeUsernameInLocalStorage(username) {
    localStorage.setItem('username', username);
}

// Function to retrieve username from local storage
function getUsernameFromLocalStorage() {
    return localStorage.getItem('username');
}

function storeNewUser(username,password){
    localStorage.setItem('newUsername',username);
    localStorage.setItem('newPwd',password);
}

function getNewUser(){
    return localStorage.getItem('newUsername');
}

function getNewPwd(){
    return localStorage.getItem('newPwd');
}

function loginFormSubmit(e) {
    e.preventDefault();
    const enteredUname = document.querySelector('#uname').value;
    const enteredPwd = document.querySelector('#pwd').value;
    const msg = document.querySelector('.msg')

    if(enteredUname === '' || enteredPwd === ''){
        msg.classList.add('error');
        msg.textContent = 'Please enter all the fields';
        setTimeout( () => {
            msg.classList.remove('error');
            msg.textContent = '';
        },3000)
    }

    if(enteredUname != '' && enteredPwd != ''){
        const currentUser = users.find(user => user.username === enteredUname && user.password === enteredPwd);

        if (currentUser) {
            console.log('Logged in successfully!!!');
            storeUsernameInLocalStorage(currentUser.username);
            window.location.href = "userPage.html";
        } else {
            msg.classList.add('error');
            msg.textContent = 'Invalid credentials. Please Enter valid details';
            setTimeout( () => {
                msg.classList.remove('error');
                msg.textContent = '';
            },3000)
        }
    }
}

const loginForm = document.querySelector('#signin');

if (loginForm) {
    loginForm.addEventListener('submit', loginFormSubmit);
}

const storedUsername = getUsernameFromLocalStorage();
const loggedInHeading = document.querySelector('.loggedIn');

if (storedUsername && loggedInHeading) {
    console.log('Welcome ' + storedUsername+' !');
    loggedInHeading.textContent = 'Hello ' + storedUsername;
} else {
    console.log('Username not found in local storage.');
}

function logout(){
    localStorage.setItem('username','');
    window.location.href = "index.html";
}


function signupFormSubmit(e){
    e.preventDefault();
    const enteredNUname = document.querySelector('#nuname').value;
    const enteredNPwd = document.querySelector('#npwd').value;
    const msg = document.querySelector('.msg1');
    if(enteredNUname === ''  || enteredNPwd === ''){
        msg.classList.add('error');
        msg.textContent = 'Please enter all the fields';
        setTimeout( () => {
            msg.classList.remove('error');
            msg.textContent = '';
        },3000)
    }
    else{
        const checkUser = users.find(user => user.username === enteredNUname);
        if(checkUser){
            msg.classList.add('error');
            msg.textContent = 'Username already exists. Please try new username';
            setTimeout( () => {
                msg.classList.remove('error');
                msg.textContent = '';
            },3000)
        }
        else{
            storeNewUser(enteredNUname,enteredNPwd);
            window.location.href = "index.html";
        }
    }
}

const signupForm = document.querySelector('#signup');
if(signupForm){
    signupForm.addEventListener('submit', signupFormSubmit);
}

let storedNewUsername = getNewUser();
let storedNewPwd = getNewPwd();

const newUser = {
    username : '',
    password : ''
};

if(storedNewUsername && storedNewPwd){
    newUserAdding(storedNewUsername,storedNewPwd);
    console.log(users);
}

