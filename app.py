from flask import Flask, render_template, request
from nltk.chat.util import Chat, reflections


pairs = [
    [
        r"my name is (.*)|I am (.*)|I'm (.*)|(.*)",
        ["Thank you for confirming your name.",]
    ],
    [
        r"hi|hey|hello",
        ["Hello!", "Hey there! How can I help you?",]
    ],
]

app = Flask(__name__)

chatbot = Chat(pairs,reflections)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/get_response", methods=["POST"])
def get_response():
    user_input = request.form["user_input"]
    print(f"User Input: {user_input}")
    if user_input.lower() == "order status":
        bot_response = "Please provide your order number, and I will check the status for you."
    elif user_input.lower() == "return item":
        bot_response = "I can help you with the return process. Please provide the order number and the item you'd like to return."
    else:

        bot_response = chatbot.respond(user_input)
        if not bot_response:
            bot_response = "I'm sorry, I don't understand that I'm just a 🤖. Can you please rephrase?"

    return bot_response

if __name__ == "__main__":
    app.run(debug=True)
