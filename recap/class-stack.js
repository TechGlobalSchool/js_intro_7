function enterCreds() {
    console.log('CREDENTIALS ENTERED');
}

function validateCreds() {
    enterCreds();
    console.log('CREDENTIALS VALIDATED');
}

function login() {
    validateCreds();
    console.log('LOGGED IN');
}

login();
/*
CREDENTIALS ENTERED
CREDENTIALS VALIDATED
LOGGED IN
*/