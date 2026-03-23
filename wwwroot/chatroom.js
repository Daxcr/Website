const username = document.getElementById("chatUsername");
const message = document.getElementById("chatbox");
const admin = document.getElementById("adminPasscode");

const chatRegion = document.getElementById("chatContent");

document.getElementById("sendButton").addEventListener("click", () => {
    console.log(`Sending: ${username.value} | ${message.value}`)
    connection.invoke("SendMessage", username.value, message.value, admin.value)
        .catch(err => console.error(err));
    message.value = "";
});

connection.on("ReceiveMessage", (user, message) => {
    let div = document.createElement("div");
    div.classList.add("chatMessage");

    let colour = "#ffffff";
    if (user == "Daxcr") { colour = "#ff0000"; }
    let display = user.trim() == "" ? "guest" : user;

    let nameSpan = document.createElement("span");
    nameSpan.style.color = colour;
    nameSpan.style.fontWeight = "600";
    nameSpan.textContent = display;

    let messageSpan = document.createElement("span");
    messageSpan.style.color = "#888888";
    messageSpan.textContent = " " + message;

    div.appendChild(nameSpan);
    div.appendChild(messageSpan);
    chatRegion.appendChild(div);
});