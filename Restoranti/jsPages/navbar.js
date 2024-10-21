// Ky kod  merr permbajtjen HTML te nje shirit navbar nga nje URL e specifikuar dhe zevendëson HTML-ne e brendshme te nje 
// elementi me klasen "navbar" me permbajtjen e marre, duke ngarkuar ne nje shirit navigimi ne faqen e kerkuar .
const nav = document.querySelector('.navbar')
fetch('/htmlPages/navbar.html')
.then(res => res.text())
.then(data => {
  nav.innerHTML=data
})
