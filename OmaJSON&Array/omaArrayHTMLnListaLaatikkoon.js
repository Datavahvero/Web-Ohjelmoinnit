window.onload = haeTuotteet();

document.getElementById('lstTuotteet').addEventListener('click', tuoteValittu);

function haeTuotteet() {

  let tuote = ["Maito", "Makeiset", "Leivonnaiset", "Leivät", "Lihat", "Kalat", "Vihannekset", "Leivonnaiset", "Hedelmät", "Naposteltavat"];
  document.getElementById("tuotteetSuoraanTaulusta").innerHTML = tuote;

  let output = 
  ` <ul>
        <li> ${tuote[0]} </li>
        <li> ${tuote[1]} </li>
        <li> ${tuote[2]} </li>
        <li> ${tuote[3]} </li>
        <li> ${tuote[4]} </li>
        <li> ${tuote[5]} </li>
        <li> ${tuote[6]} </li>
        <li> ${tuote[7]} </li>
        <li> ${tuote[8]} </li>
        <li> ${tuote[9]} </li>
    </ul> 
    `;

  ; 
  document.getElementById('tuotteetAlkioKerrallaan').innerHTML = output;

  let dropdown = document.getElementById('lstTuotteet');

  
  let defaultOption = document.createElement('option')
  defaultOption.text = 'Tuotteet täältä';
  defaultOption.value = '';
  
  dropdown.add(defaultOption)
  let option;
  for (let i = 0; i < tuote.length; i++) {
      
      option = document.createElement('option');
      option.text = tuote[i];
      
      dropdown.add(option);

  }
}
function tuoteValittu(){
    var selectedValue = document.getElementById("lstTuotteet").value;
    console.log(selectedValue);
}
