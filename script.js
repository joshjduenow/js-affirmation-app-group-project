onReady();



function fireEmoji() {
  console.log("Fire emoji works!!");
  
  let emojis = document.getElementById('emojis');

  emojis.innerHTML += `<p>🔥</p>`
}

function iceEmoji() {
  console.log("Ice emoji works!!");
  
  let emojis = document.getElementById('emojis');

  emojis.innerHTML += `<p>❄️</p>`

}
function handleSubmit(event) {
  console.log(event);

  event.preventDefault();
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

function deleteText(event) {
  event.target.parentElement.parentElement.remove();
  
}

function onReady() {
  console.log('Javascript is working!');
}
