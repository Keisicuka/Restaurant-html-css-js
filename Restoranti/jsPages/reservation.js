// Krijojme vektorin per te ruajtur te dhenat
var reservation = [];
// Krijojme funksionin qe do te menaxhoje reservimet
function bookReservation() {
  // Kthen vlerat nga forma qe kemi krijuar
  var partySize = document.getElementById("options").value;
  var date = document.getElementById("date").value;
  var time = document.getElementById("time").value;
  // Kontrollojme nese ndonjera nga format eshte bosh
  if (partySize === "" || date === "" || time === "") {
      alert("Please complete all the information.");
    } else {
      document.getElementById("options").value = "";
      document.getElementById("date").value = "";
      document.getElementById("time").value = "";
        alert("Thank you for booking at AquaMarine.");
      // Krijojme objektin qe do te ruaje rezervimet
      // Vendosim rezervimet ne nje vektor
      var reservation = {
        partySize: partySize,
        date: date,
        time: time
        
      };
      
      // E logojme ne konsole qe te kemi mundesi ti shikojme te dhenat
      console.log("Reservation: ", reservation);
    }
  }

