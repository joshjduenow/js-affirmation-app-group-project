onReady();

let fire = 0;
let ice = 0;


function fireEmoji() {
  console.log("Fire emoji works!!");
  
  let emojis = document.getElementById('emojis');

  emojis.innerHTML += `<p>🔥</p>`

  fire ++;
  console.log(fire);
}

function iceEmoji() {
  console.log("Ice emoji works!!");
  
  let emojis = document.getElementById('emojis');

  emojis.innerHTML += `<p>❄️</p>`

  ice ++;
  console.log(ice);

}
function handleSubmit(event) {
  console.log(event);

  event.preventDefault();
  if ( fire > ice ) {
  let affirmation = document.getElementById('affirmationText');
  let author = document.getElementById('authorText');

  console.log(author, affirmation);

  let tables = document.getElementById('tableBody');
  tables.innerHTML += 
  `<tr>
  <td>${affirmation.value}</td>
  <td>${author.value}</td>
  <td><button onclick="deleteText(event)">❌</button></td>
   </tr>`
   affirmation.value = ""
   author.value = ""
  }
}

function deleteText(event) {
  if ( ice > fire ) {
  event.target.parentElement.parentElement.remove();

  
  }
  
}

function onReady() {
  console.log('Javascript is working!');
}
