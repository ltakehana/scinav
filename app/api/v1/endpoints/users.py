from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app import crud, schemas, models
from app.api import deps

router = APIRouter()

@router.post("/", response_model=schemas.User)
def create_user(*, db: Session = Depends(deps.get_db), user_in: schemas.UserCreate):
    user = crud.crud_user.get_by_email(db, email=user_in.email)
    if user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return crud.crud_user.create(db=db, user_in=user_in)

@router.put("/{user_id}", response_model=schemas.User)
def update_user(*, db: Session = Depends(deps.get_db), user_id: int, user_in: schemas.UserUpdate):
    user = crud.crud_user.get(db=db, user_id=user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return crud.crud_user.update(db=db, db_user=user, user_in=user_in)

@router.get("/{user_id}", response_model=schemas.User)
def read_user(*, db: Session = Depends(deps.get_db), user_id: int):
    user = crud.crud_user.get(db=db, user_id=user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user
