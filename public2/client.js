const socket = io();
console.log("hello world");

let name;
let textarea = document.querySelector(".wtf");
let messageArea = document.querySelector(".message__area");

do {
  name = prompt("Enter your name:");
} while (!name);

textarea.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    // console.log(e.target.value);
    sendMessage(e.target.value);
  }
});

const sendMessage = (message) => {
  // console.log("in send message");
  let msg = {
    user: name,
    message: message,
  };

  //Appending:
  appendMessage(msg, "outgoing");

  scrollToBottom();

  textarea.value = "";

  //send to server
  socket.emit("message", msg);
};

const appendMessage = (msg, type) => {
  // console.log(msg);
  let mainDiv = document.createElement("div");
  let className = type;
  mainDiv.classList.add(className, "message");

  let markup = `
  <h4>${msg.user}</h4>
  <p>${msg.message}<p>
  
  `;
  // console.log(markup);
  mainDiv.innerHTML = markup;
  messageArea.appendChild(mainDiv);
};

//receiving the message
socket.on("message", (msg) => {
  // console.log(msg);
  appendMessage(msg, "incoming");
  scrollToBottom();
});

function scrollToBottom() {
  messageArea.scrollTop = messageArea.scrollHeight;
}
