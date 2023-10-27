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
function onReady() {
  console.log('Javascript is working!');
}
