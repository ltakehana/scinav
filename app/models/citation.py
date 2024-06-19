from sqlalchemy import Column, Integer, DateTime, ForeignKey, func
from sqlalchemy.orm import relationship
from app.db.base_class import Base

class Citation(Base):
    id = Column(Integer, primary_key=True, index=True)
    citing_article_id = Column(Integer, ForeignKey("article.id"))
    cited_article_id = Column(Integer, ForeignKey("article.id"))
    created_at = Column(DateTime, default=func.now())
    updated_at = Column(DateTime, default=func.now(), onupdate=func.now())

    citing_article = relationship("Article", foreign_keys=[citing_article_id], back_populates="citing_articles")
    cited_article = relationship("Article", foreign_keys=[cited_article_id], back_populates="cited_articles")
