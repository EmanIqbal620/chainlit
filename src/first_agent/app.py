from dotenv import load_dotenv
from agents import Agent, Runner, OpenAIChatCompletionsModel, AsyncOpenAI, set_tracing_disabled
import os

load_dotenv()
set_tracing_disabled(True)

provider = AsyncOpenAI(
    api_key=os.getenv("GEMINI_API_KEY"),
    base_url="https://generativelanguage.googleapis.com/v1beta/openai/"
)

model = OpenAIChatCompletionsModel(
    model="gemini-2.5-flash",
    openai_client=provider,
)

conversation_histories: dict[str, list[dict]] = {}
default_history: list[dict] = []

async def myAgent(user_input, session_id: str | None = None):
    agent = Agent(
        name="Assistant",
        instructions="you are helpful assistant that can answer questions and provide information.",
        model=model
    )

    if session_id:
        if session_id not in conversation_histories:
            conversation_histories[session_id] = []
        history = conversation_histories[session_id] + [{"role": "user", "content": user_input}]
    else:
        history = default_history + [{"role": "user", "content": user_input}]

    response = await Runner.run(agent, history)

    if session_id:
        conversation_histories[session_id].append({"role": "user", "content": user_input})
        conversation_histories[session_id].append({"role": "assistant", "content": response.final_output})
    else:
        default_history.append({"role": "user", "content": user_input})
        default_history.append({"role": "assistant", "content": response.final_output})

    return response.final_output