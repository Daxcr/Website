const username = document.getElementById("chatUsername");
const message = document.getElementById("chatbox");
const admin = document.getElementById("adminPasscode");

const chatRegion = document.getElementById("chatContent");

document.getElementById("sendButton").addEventListener("click", () => {
    connection.invoke("SendMessage", username.value, message.value, admin.value)
        .catch(err => console.error(err));
    message.value = "";
});

connection.on("ReceiveMessage", (user, message) => {
    let div = document.createElement("div");
    div.classList.add("chatMessage");
    let colour = "#ffffff";
    
    if (user == "Daxcr") { colour = "#ff0000" }
    
    div.innerHTML = `<span style="color: ${colour}; font-weight: 600;">${user}</span><span style="color: #888888;"> ${message}</span>`;
    chatRegion.appendChild(div);
})