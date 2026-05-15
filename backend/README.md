---
title: AI Chatbot API
emoji: 🤖
colorFrom: blue
colorTo: gray
sdk: docker
app_port: 7860
---

# AI Chatbot API

FastAPI backend for the AI Chatbot. Uses Gemini 2.5 Flash via openai-agents SDK.

## API

- `GET /health` — health check
- `POST /chat` — send a message

### Chat Request

```json
{ "message": "Hello!", "session_id": "abc123" }
```

### Chat Response

```json
{ "response": "Hi there!", "session_id": "abc123" }
```
