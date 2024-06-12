from sqlalchemy.orm import Session
from app.models.user import User
from app.schemas.user import UserCreate, UserUpdate
from app.core.security import get_password_hash

class CRUDUser:
    def get(self, db: Session, user_id: int):
        return db.query(User).filter(User.user_id == user_id).first()

    def get_by_email(self, db: Session, email: str):
        return db.query(User).filter(User.email == email).first()

    def create(self, db: Session, user_in: UserCreate):
        db_user = User(
            username=user_in.username,
            email=user_in.email,
            password_hash=get_password_hash(user_in.password),
        )
        db.add(db_user)
        db.commit()
        db.refresh(db_user)
        return db_user

    def update(self, db: Session, db_user: User, user_in: UserUpdate):
        update_data = user_in.dict(exclude_unset=True)
        for field, value in update_data.items():
            setattr(db_user, field, value)
        if user_in.password:
            db_user.password_hash = get_password_hash(user_in.password)
        db.commit()
        db.refresh(db_user)
        return db_user

crud_user = CRUDUser()
