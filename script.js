// Função para alternar a exibição da caixa de chat
function toggleChatBox() {
    var chatBox = document.getElementById("chatBox");
    chatBox.style.display = chatBox.style.display === "none" ? "block" : "none";
}

// Função para enviar mensagem
function sendMessage() {
    var input = document.getElementById("messageInput");
    var message = input.value;
    if (message.trim() !== "") {
        var chatMessages = document.getElementById("chatMessages");
        var messageDiv = document.createElement("div");
        messageDiv.className = "message";
        messageDiv.textContent = message;
        chatMessages.appendChild(messageDiv);
        input.value = "";
    }
}

function Cadastro(){
    alert('Cadastro enviado com sucesso, em seu e-mail receberá o protocolo de Cadastramento para acompanhar em sua conta')
}
