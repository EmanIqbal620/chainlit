FROM python:3.13-slim

WORKDIR /app

COPY backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY src/ src/
COPY backend/ backend/
COPY .env .

ENV PYTHONPATH=/app
ENV CHAINLIT_TELEMETRY=false
ENV DO_NOT_TRACK=1

EXPOSE 7860

CMD uvicorn backend.app:app --host 0.0.0.0 --port ${PORT:-7860}
