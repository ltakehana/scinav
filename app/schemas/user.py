from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

# Schema para criar um novo usuário (entrada)
class UserCreate(BaseModel):
    username: str
    email: EmailStr
    password: str

# Schema para atualizar um usuário existente (entrada)
class UserUpdate(BaseModel):
    username: Optional[str] = None
    email: Optional[EmailStr] = None
    password: Optional[str] = None

# Schema para a resposta do usuário (saída)
class User(BaseModel):
    user_id: int
    username: str
    email: EmailStr
    created_at: datetime
    updated_at: Optional[datetime] = None

    class Config:
        orm_mode = True
