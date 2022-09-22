var myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/ker.jpg') {
    myImage.setAttribute ('src', 'images/ass.jpg');
  } else {
    myImage.setAttribute ('src', 'images/ker.jpg');
  }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Мой главный заголовок, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Мой главный заголовок, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
