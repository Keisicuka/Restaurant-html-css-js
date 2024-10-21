// Ky kod merr permbajtjen HTML nga skedari "footer.html" i vendosur ne path-in '/restaurant/Restoranti/htmlPages/' 
//, me pas e fut ate permbajtje HTML ne elementin me klasen 'footer' ne faqen aktuale te internetit.
const foot = document.querySelector('.footer')
fetch('/htmlPages/footer.html')
.then(res=>res.text())
.then(data=>{
  foot.innerHTML=data
})


//Vektor per te menaxhuar emailet e dhena nga perdoruesit
var subscribedEmails = [];
// Funksion per te menaxhuar subscriptions
function handleSubscription(event,form)
{
  event.preventDefault(); // Prevent form submission

  // Merr adresen e emailit nga forma ku e ploteson perdoruesi
  var emailInput = form.querySelector("#email");
  var email = emailInput.value.trim();
  // Kontrollon nese textarea eshte bosh
  if (!email.trim()) {
    alert("Please complete all the information.");
  } else if (!isValidEmail(email)) { // Kontrollon nese adresa qe ka vendosur eshte valide
    alert("Please enter a valid email address.");
  } else if (isValidEmail(email))  {
    // Nese kalon te gjitha validimet
    emailInput.value = "";
    alert("Thank you for signing up for AquaMarine's newsletter.");
  }
    // Ruan te dhenat ne vektor
    subscribedEmails.push(email);
     // E logojme ne konsole qe te kemi mundesi ti shikojme te dhenat
     console.log("Subscribed Emails:", subscribedEmails);
}


// Funksion per te validuar formatin e emailit
function isValidEmail(email) {
  var emailvalidation =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailvalidation.test(email);
}



