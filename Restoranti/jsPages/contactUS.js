  // Krijojme vektorin per te ruajtur te dhenat
  var messages = []; //deklarojme nje vektor te zbazet per te marre mesazhin

  function sendMessage(event,form) {
    event.preventDefault(); 

    var name = form.querySelector("#name").value.trim(); // merr emrin e name nga forma
    var email = form.querySelector("#email").value.trim();//merr vleren email nga forma
    var phone = form.querySelector("#phone").value.trim();// merr vleren  e phone nga forma
    var request = form.querySelector("#request").value.trim();// merr vleren e request
  
    // Kontrollojme nese ndonjera nga fushat eshte bosh
    if (!name || !email || !phone || !request) {
      alert("Please complete all the information.");
      return;
    }

    // Validojme formatin e emailit
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Validojme formatin e numrit te kontaktit
    if (!isValidPhoneNumber(phone)) {
      alert("Please enter a valid phone number.");
      return;
    }

     // Nese validohen te gjitha shfaqet mesazhi i falenderimit, resetohen fushat dhe ruajme mesazhin e lene nga klienti
     form.querySelector("#name").value = "";
     form.querySelector("#email").value = "";
     form.querySelector("#phone").value = "";
     form.querySelector("#request").value = "";
  alert("Thank you for leaving your message.");
 
  // Krijohet objekti i ri i cili permban te dhenat e mesazhit tek vektori me siper
    var messages = {
      name: name,
      email: email,
      phone: phone,
      request: request,
    };
    messages.push(message);
    // E logojme ne konsole qe te kemi mundesi ti shikojme te dhenat
    console.log("Messages:", messages);
  }

  // Funksioni per te validuar formen e emailit
  function isValidEmail(email) {
    var emailvalidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailvalidation.test(email);
  }

  // Funksion per te validuar formatin e numrit
  function isValidPhoneNumber(phone) {
    var phonevalidation = /^\d+$/;
    return phonevalidation.test(phone);
  }

  

