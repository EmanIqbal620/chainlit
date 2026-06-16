# AI Chat — Chainlit + Gemini 💬

> A conversational AI chat interface built with Chainlit and powered by Google Gemini API — deployed live on Hugging Face Spaces.

[![Live Demo](https://img.shields.io/badge/Live_Demo-FFD21E?style=for-the-badge&logo=huggingface&logoColor=black)](https://emaniqbal-chainlit1.hf.space)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

---

## 📌 What This Does

A production AI chat application where users can have real-time conversations with Google Gemini through a clean, responsive chat interface. Built with Chainlit for the UI layer and FastAPI-compatible backend, deployed on Hugging Face Spaces for public access.

---

## ✨ Features

- 💬 Real-time streaming chat responses from Gemini API
- 🎨 Clean chat UI powered by Chainlit
- 🚀 Deployed and publicly accessible on Hugging Face Spaces
- 🔄 Conversation history maintained within session
- ⚡ Fast response times with async Python backend

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Chat UI | Chainlit |
| AI Model | Google Gemini API |
| Language | Python |
| Hosting | Hugging Face Spaces |

---

## 🚀 Run Locally

### Prerequisites
- Python 3.9+
- Google Gemini API key

### Installation

```bash
git clone https://github.com/EmanIqbal620/chainlit
cd chainlit
pip install -r requirements.txt
```

### Environment Variables

```env
GEMINI_API_KEY=your_gemini_api_key
```

### Start the App

```bash
chainlit run app.py
```

Open [http://localhost:8000](http://localhost:8000)

---

## 📁 Project Structure

```
chainlit/
├── app.py              ← Main Chainlit app + Gemini integration
├── requirements.txt
├── .env.example
└── README.md
```

---

## 🌐 Live

👉 [https://emaniqbal-chainlit1.hf.space](https://emaniqbal-chainlit1.hf.space)

---

## 👩‍💻 Author

**Eman Iqbal** · [Portfolio](https://portfolio2-one-tan.vercel.app) · [LinkedIn](https://linkedin.com/in/eman-iqbal-4954a7395)

