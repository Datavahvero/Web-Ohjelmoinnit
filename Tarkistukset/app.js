document.getElementById('btnTark').addEventListener('click', tarkista);

function tarkista() {
    let x, text;
    var d = new Date();
    let kuluvavuosi = d.getUTCFullYear();
    let ika = 0;
  
    // Get the value of the input field with id="numb"
    x = document.getElementById("numb").value;
    if (isNaN(x)) {
      text = x + ', tieto on virheellinen';
      document.getElementById("demo").innerHTML = text;
    }
    else {
       ika = kuluvavuosi - x;
    }    
    if (ika <= 2 || x > 100) {
      text = ika + ', tieto on virheellinen';
      document.getElementById("demo").innerHTML = text;
    }
    else {
      document.getElementById("demo").innerHTML = 'Tieto on oikein';
    }    
  }

  // tee tarkistus, että annettu tieto on numero ja syntymävuosi henkilöltä
  // joka ei ole yli sata vuotta eikä alle 2, 
  // laske kuluvan päivän mukaan
  