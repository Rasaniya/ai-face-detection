(function() {


    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const config = {
        apiKey: "AIzaSyB-HgrykWubxi1PkrEWgYDsJT_OjOyLh50",
        authDomain: "fir-auth-2f259.firebaseapp.com",
        projectId: "fir-auth-2f259",
        storageBucket: "fir-auth-2f259.appspot.com",
        messagingSenderId: "452018469001",
        appId: "1:452018469001:web:c7a8027b4cf5a7ac4f6e58",
        measurementId: "G-CHKPSLWM09"
    };
    firebase.initializeApp(config)

    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnSignUp');
    const btnLogout = document.getElementById('btnLogOut');

    btnLogin.addEventListener('click', e=>{
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();

      const promise = auth.signInWithEmailAndPassword(email, pass);

      promise.catch(e => console.log(e.message))
  })
})