function sendOption(option) {
  document.getElementById("user_input").value = option;
  sendMessage();
}

function sendMessage() {
  let user_input = document.getElementById("user_input").value;
  let chat_box = document.getElementById("chat-box");

  // Display the user's message
  chat_box.innerHTML += "<p><strong>You:</strong> " + user_input + "</p>";

  // Send the message to the server
  fetch("/get_response", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "user_input=" + encodeURIComponent(user_input),
  })
    .then((response) => response.text())
    .then((bot_response) => {
      // Display the bot's response
      chat_box.innerHTML +=
        "<p><strong>Chattie:</strong> " + bot_response + "</p>";
      document.getElementById("user_input").value = "";
      chat_box.scrollTop = chat_box.scrollHeight; // Scroll to the bottom of the chat box
    });
}

document
  .getElementById("user_input")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage();
    }
  });
