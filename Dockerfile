# Use uma imagem oficial do Python como imagem base
FROM python:3.9-slim

# Instale o cliente PostgreSQL
RUN apt-get update && apt-get install -y postgresql-client

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie o arquivo requirements.txt para o diretório de trabalho
COPY requirements.txt .

# Instale as dependências especificadas no requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copie o restante do código do aplicativo para o diretório de trabalho
COPY . .

# Copie o script wait-for-postgres
COPY wait-for-postgres.sh .

# Defina variáveis de ambiente
ENV PYTHONUNBUFFERED=1

# Comando para rodar a aplicação
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
