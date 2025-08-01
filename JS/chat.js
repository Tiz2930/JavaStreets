// Intenta traer los chats guardados en localStorage. Si no existen, usa los iniciales inventados.
const savedChats = JSON.parse(localStorage.getItem('joinus-chats'));

const chats = savedChats || {
    "Carlos López": [
        { from: "Carlos", text: "Hola, quería consultarte por el evento del viernes." },
        { from: "Tú", text: "¡Hola! Sí, decime, ¿qué querés saber?" }
    ],
    "Sofía Torres": [
        { from: "Sofía", text: "¿Viste el nuevo evento que publicaron?" },
        { from: "Tú", text: "Sí, lo vi, está bueno." }
    ],
    "Martín García": [
        { from: "Martín", text: "Tengo dudas sobre la entrada al evento." },
        { from: "Tú", text: "Ahora te averiguo bien." }
    ],
    "Lucía Fernández": [
        { from: "Lucía", text: "¿Vas a ir al evento de la semana que viene?" },
        { from: "Tú", text: "Todavía no lo decidí." }
    ]
};

const userList = document.querySelectorAll(".sidebar li");
const chatTitle = document.getElementById("chat-title");
const chatMessages = document.querySelector(".chat-messages");
const input = document.querySelector(".chat-input input");
const sendButton = document.querySelector(".chat-input button");

let currentUser = "Carlos López";

// ---------------- FUNCIONES ----------------

function saveChatsToLocalStorage() {
    localStorage.setItem('joinus-chats', JSON.stringify(chats));
}

function loadChat(user) {
    currentUser = user;
    chatTitle.textContent = user;
    chatMessages.innerHTML = "";

    chats[user].forEach(msg => {
        const div = document.createElement("div");
        div.classList.add("message");
        div.classList.add(msg.from === "Tú" ? "sent" : "received");

        const msgText = document.createElement("div");
        msgText.textContent = msg.text;

        const msgDate = document.createElement("div");
        msgDate.textContent = msg.date || "";
        msgDate.style.fontSize = "0.75em";
        msgDate.style.opacity = "0.6";
        msgDate.style.marginTop = "5px";

        div.appendChild(msgText);
        if (msg.date) div.appendChild(msgDate);

        chatMessages.appendChild(div);
    });

    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function sendMessage() {
    const text = input.value.trim();
    if (!text) return;

    const now = new Date();
    const timestamp = now.toLocaleDateString("es-AR") + " " + now.toLocaleTimeString("es-AR", {
        hour: '2-digit',
        minute: '2-digit'
    });

    chats[currentUser].push({ from: "Tú", text, date: timestamp });

    saveChatsToLocalStorage();
    loadChat(currentUser);
    input.value = "";
}

// ---------------- EVENTOS ----------------

userList.forEach(li => {
    li.addEventListener("click", () => {
        userList.forEach(l => l.classList.remove("active"));
        li.classList.add("active");
        loadChat(li.textContent);
    });
});

sendButton.addEventListener("click", sendMessage);

input.addEventListener("keydown", e => {
    if (e.key === "Enter") sendMessage();
});

loadChat(currentUser);

// Menú desplegable
const menuBtn = document.getElementById("menu-btn");
const menuOptions = document.getElementById("menu-options");

menuBtn.addEventListener("click", () => {
    menuOptions.classList.toggle("hidden");
});

// ✅ Limpiar historial usando SweetAlert2
const clearHistoryBtn = document.getElementById("clear-history");

clearHistoryBtn.addEventListener("click", () => {
    if (!currentUser) return;

    Swal.fire({
        title: '¿Estás seguro?',
        text: `¿Querés borrar el historial con ${currentUser}?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#ff9d00',
        cancelButtonColor: '#333',
        confirmButtonText: 'Sí, borrar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            chats[currentUser] = [];
            saveChatsToLocalStorage();
            loadChat(currentUser);

            Swal.fire({
                title: 'Borrado',
                text: `El historial con ${currentUser} fue eliminado.`,
                icon: 'success',
                timer: 1800,
                showConfirmButton: false
            });
        }
    });
});

// Cerrar menú al hacer clic fuera
document.addEventListener("click", (e) => {
    if (!menuBtn.contains(e.target) && !menuOptions.contains(e.target)) {
        menuOptions.classList.add("hidden");
    }
});
