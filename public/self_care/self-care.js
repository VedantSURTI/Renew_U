document.getElementById("Sad").style.display = "none";
document.getElementById("Lonely").style.display = "none";
document.getElementById("Depressed").style.display = "none";
document.getElementById("Happy").style.display = "none";

var name = localStorage.getItem("name");
if (name <= 1.5) {
  document.getElementById("Happy").style.display = "block";
  // document.getElementById("Happy").setAttribute("selected", "selected");
  document.getElementById("Happy").selected = "true";
} else if (name <= 2.5) {
  document.getElementById("Sad").style.display = "block";
  // document.getElementById("Sad").setAttribute("selected", "selected");
  document.getElementById("Sad").selected = "true";
} else if (name <= 3.5) {
  document.getElementById("Lonely").style.display = "block";
  // document.getElementById("Lonely").setAttribute("selected", "selected");
  document.getElementById("Lonely").selected = "true";
} else {
  document.getElementById("Depressed").style.display = "block";
  // document.getElementById("Depressed").setAttribute("selected", "selected");
  document.getElementById("Depressed").selected = "true";
}
function updateData() {
  var dropdown = document.querySelector(".drop");

  var selectedValue = dropdown.options[dropdown.selectedIndex].value;
  // console.log(selectedValue);
  document.getElementById("Sad").style.display = "none";
  document.getElementById("Lonely").style.display = "none";
  document.getElementById("Depressed").style.display = "none";
  document.getElementById("Happy").style.display = "none";

  document.getElementById(selectedValue).style.display = "block";
}

const textElement = document.getElementById("text"); // get the text element
const text =
  "Here are some tips that can help you in your pursuit. Exercise regularly: Exercise releases endorphins, which are natural mood-boosting chemicals in the brain. Regular exercise can help reduce stress, improve mood, and increase self-esteem. Practice mindfulness: Mindfulness is the practice of being fully present and engaged in the current moment. Mindfulness practices like meditation, deep breathing, or yoga can help reduce stress and anxiety.";

// text to display
let index = 0; // current index in the text string

// function to display the next character in the text
function displayNextCharacter() {
  textElement.innerHTML += text.charAt(index); // append the next character to the text element
  index++; // increment the index
  if (index < text.length) {
    setTimeout(displayNextCharacter, 50); // display the next character after a slight delay
  }
}

displayNextCharacter();

// console.log("Hello");
