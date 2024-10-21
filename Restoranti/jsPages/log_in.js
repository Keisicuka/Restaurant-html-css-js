// Me ane te ketij kodi behet e mundur qe me ane te klikimit te 2 lidhjeve login dhe register
// te shfaqet tabela me elementet perkates 
document.addEventListener("DOMContentLoaded", function() {
    //Behet kapja e elementeveduke i vendosur ne variablat e krijuar
    const wrapper = document.querySelector('.wrapper'); // zgjedh elementin me klase 'wrapper'
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');

    registerLink.addEventListener('click', () => {
        wrapper.classList.add('active');
    });
    // Kur klikohet linku për regjistrimin (registerLink), klasa 'active' shtohet në elementin 
    // .wrapper. Kjo mund të shërbejë për të shfaqur formën e regjistrimit.

    loginLink.addEventListener('click', () => {
        wrapper.classList.remove('active');
    });
    // Kur klikohet linku për hyrjen (loginLink), klasa 'active' hiqet nga 
    //  .wrapper. Kjo mund të shërbejë për të shfaqur formën e hyrjes.
    // shfaq ose fsheh një pjesë të wapper-it bazuar në veprimet e përdoruesit.
 
 
    const loginForm = document.querySelector('.login form');
    const registerForm = document.querySelector('.register form');
    // Kjo përdoret për menaxhimin e dërgimit të të dhënave të formës për procesim.

    // Funksion qe menaxhon log-in
    function loginUser(event) {
        event.preventDefault(); // parandalon dergimin e formes by default
        const email = this.querySelector('input[type="email"]').value;
        const password = this.querySelector('input[type="password"]').value;

        // Kontrollojme nese email dhe password korespondojne me ate te regjistrimit
        if (email === localStorage.getItem('email') && password === localStorage.getItem('password')) {
            alert('You are logged in!');
            // Kthehemi tek faqja kryesore e menu pasi klikojme OK tek mesazhi i shfaqur ne ekran
            window.location.href = "/htmlPages/menu.html";
        } else {
            alert('Invalid email or password. Please try again.');
        }
    }

    //Krijojme funksionin qe do te menaxhoje regjistrimet
    function registerUser(event) {
        event.preventDefault(); //parandalon dergimin  e formes 
        const username = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const password = this.querySelector('input[type="password"]').value;

        // Ruajme te dhenat e perdoruesve ne local storage (dummy storage)
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);

        // Alert qe njofton userin qe regjistrimi u krye me sukses
        alert('Registration successful. You can now log in.');
    }

    // Vendosim pergjuesin e eventit per log in dhe regjistrim
    if (loginForm) {
        loginForm.addEventListener('submit', loginUser);
    }
    if (registerForm) {
        registerForm.addEventListener('submit', registerUser);
    }
});