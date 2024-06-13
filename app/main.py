from fastapi import FastAPI, Request
from fastapi.responses import Response
from fastapi.middleware.cors import CORSMiddleware
from app.api.v1.api import api_router
from app.db.session import SessionLocal
from app.db.base import Base  # Importa todos os modelos para garantir que o Alembic os reconheça
from app.db.session import engine


# Cria a instância do FastAPI
app = FastAPI()

# Configurações de CORS
origins = [
    "http://localhost:3000",  # React frontend local
    "http://localhost:8000",  # FastAPI backend local
    # Adicione outros URLs conforme necessário
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Inclui as rotas do aplicativo
app.include_router(api_router, prefix="/api/v1")

# Cria as tabelas no banco de dados se não existirem
Base.metadata.create_all(bind=engine)

@app.middleware("http")
async def db_session_middleware(request: Request, call_next):
    response = Response("Internal server error", status_code=500)
    try:
        request.state.db = SessionLocal()
        response = await call_next(request)
    finally:
        request.state.db.close()
    return response
