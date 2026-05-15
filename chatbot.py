from first_agent.app import myAgent

import chainlit as cl
import asyncio

@cl.on_chat_start
async def start():
    await cl.Message(content="welcome to the chatbot. How can I assest you today?").send()


@cl.on_message
async def main(message: cl.Message):
    try:
        response = await myAgent(message.content)
        await cl.Message(content=response).send()
    except Exception as e:
        await cl.Message(content=f"An error occurred: {str(e)}").send()    