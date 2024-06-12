.PHONY: help install run build up down migrate upgrade downgrade lint test

help: ## Mostra esta mensagem de ajuda
	@echo "Escolha um alvo para executar:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install: ## Instala as dependências do projeto
	@echo "Instalando dependências..."
	pip install -r requirements.txt

run: ## Executa o servidor FastAPI
	@echo "Iniciando o servidor..."
	uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload

build: ## Constrói a imagem Docker
	@echo "Construindo a imagem Docker..."
	docker-compose build

up: ## Inicia os serviços Docker
	@echo "Iniciando os serviços Docker..."
	docker-compose up

down: ## Para os serviços Docker
	@echo "Parando os serviços Docker..."
	docker-compose down

migrate: ## Cria uma nova migração do Alembic
	@echo "Criando uma nova migração do Alembic..."
	alembic revision --autogenerate -m "New migration"

upgrade: ## Aplica as migrações do Alembic
	@echo "Aplicando as migrações do Alembic..."
	alembic upgrade head

downgrade: ## Reverte a última migração do Alembic
	@echo "Revertendo a última migração do Alembic..."
	alembic downgrade -1

lint: ## Verifica a formatação do código com flake8
	@echo "Verificando a formatação do código..."
	flake8 app

test: ## Executa os testes
	@echo "Executando os testes..."
	pytest tests
