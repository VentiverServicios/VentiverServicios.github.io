const $btnSignIn = document.querySelector('.sign-in-btn'),
      $btnSignUp = document.querySelector('.sign-up-btn'),  
      $signUp = document.querySelector('.sign-up'),
      $signIn  = document.querySelector('.sign-in');


document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active');
    }
});


const $signUpForm = document.querySelector('.sign-up .formulario');
$signUpForm.addEventListener('click', e => {    if (e.target.value === "Registrarse") {
        const email = $signUpForm.querySelector('input[type="email"]').value;
        const password = $signUpForm.querySelector('input[type="password"]').value;


        if (email && password) {
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            alert('Registro exitoso. Ahora puede iniciar sesión.');
        } else {
            alert('Por favor, complete todos los campos.');
        }
    }
});


const $signInForm = document.querySelector('.sign-in .formulario');
$signInForm.addEventListener('click', e => {
    if (e.target.value === "Iniciar Sesion") {
        const email = $signInForm.querySelector('input[type="email"]').value;
        const password = $signInForm.querySelector('input[type="password"]').value;

   
        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');

   
        if (email === storedEmail && password === storedPassword) {
            alert('Inicio de sesión exitoso. ¡Bienvenido!');
      
            window.location.href = "index.html";
        } else {
            alert('Correo electrónico o contraseña incorrectos.');
        }
    }
});
