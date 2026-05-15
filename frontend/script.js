const API_URL = "https://YOUR_BACKEND.onrender.com"; // CHANGE THIS after deploying backend

let sessionId = crypto.randomUUID();
const messagesEl = document.getElementById("messages");
const loadingEl = document.getElementById("loading");
const form = document.getElementById("chat-form");
const input = document.getElementById("message-input");
const newChatBtn = document.getElementById("new-chat");

function addMessage(text, role) {
  const div = document.createElement("div");
  div.className = `message ${role}`;

  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.textContent = text;

  div.appendChild(bubble);
  messagesEl.appendChild(div);
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

function setLoading(v) {
  loadingEl.classList.toggle("hidden", !v);
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const msg = input.value.trim();
  if (!msg) return;

  addMessage(msg, "user");
  input.value = "";
  setLoading(true);

  try {
    const res = await fetch(`${API_URL}/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: msg, session_id: sessionId }),
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.detail || "Server error");
    }

    const data = await res.json();
    addMessage(data.response, "bot");
  } catch (err) {
    addMessage(`Error: ${err.message}`, "error");
  } finally {
    setLoading(false);
  }
});

newChatBtn.addEventListener("click", () => {
  messagesEl.innerHTML = "";
  sessionId = crypto.randomUUID();
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    form.requestSubmit();
  }
});
