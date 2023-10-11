function enterCreds(username, password) {
    return new Promise(() => {
        setTimeout(() => {
            console.log('CREDENTIALS ENTERED');
        }, 30000);
    })
}

function validateCreds() { // late
    return new Promise(() => {
        setTimeout(() => {
            console.log('CREDENTIALS VALIDATED');
        }, 30000);
    }); 
}

function login() {
    console.log('LOGGED IN');
}

enterCreds();
validateCreds();
login();

/*
CREDENTIALS ENTERED
CREDENTIALS VALIDATED
LOGGED IN
*/