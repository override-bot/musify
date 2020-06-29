function handleSignUp() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (email.length < 4) {
        alert('Please enter an email address.');
        return;
    }
    if (password.length < 4) {
        alert('Please enter a password.');
        return;
    }

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {

        var errorCode = error.code;
        var errorMessage = error.message;

        if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.');
        } else {
            alert(errorMessage);
        }
        console.log(error);

    });

}

//writeUserData(userId, name, email)

function writeUserData(userId, name, email) {
    var email = user.email
    var name = document.getElementById('username');
    firebase.database().ref('users/' + userId).set({
        username: name,
        email: email
    });


}

function toggleSignIn() {
    if (firebase.auth().currentUser) {

        firebase.auth().signOut();

    } else {
        var email = document.getElementById('email2').value;
        var password = document.getElementById('password2').value;
        if (email.length < 4) {
            alert('Please enter an email address.');
            return;
        }
        if (password.length < 4) {
            alert('Please enter a password.');
            return;
        }

        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {

            var errorCode = error.code;
            var errorMessage = error.message;

            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            } else {
                alert(errorMessage);
            }
            console.log(error);


        });


    }

}

function initApp() {

    firebase.auth().onAuthStateChanged(function(user) {

        if (user) {

            window.location.href = '../html/player.html';

        }

    });
    document.getElementById('signin').addEventListener('click', toggleSignIn, false);
    document.getElementById('signup').addEventListener('click', handleSignUp, false);

}

window.onload = function() {
    initApp();
};