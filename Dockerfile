FROM python:3.13-slim

WORKDIR /app

COPY pyproject.toml uv.lock ./
COPY .python-version ./

RUN pip install uv && uv sync --frozen

COPY . .

EXPOSE 8000

ENV CHAINLIT_TELEMETRY=false
ENV DO_NOT_TRACK=1
ENV UV_LINK_MODE=copy

CMD uv run chainlit run chatbot.py --host 0.0.0.0 --port ${PORT:-8000} --headless
