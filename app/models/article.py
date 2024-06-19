from sqlalchemy import Column, Integer, String, Text, DateTime, ForeignKey, func
from sqlalchemy.orm import relationship
from app.db.base_class import Base

class Article(Base):
    id = Column(Integer, primary_key=True, index=True)
    title = Column(Text, nullable=False)
    authors = Column(Text)
    year = Column(Integer)
    doi = Column(String)
    link = Column(Text)
    abstract = Column(Text)
    source = Column(String)
    date_added = Column(DateTime, default=func.now())
    search_string = Column(Text)
    project_id = Column(Integer, ForeignKey("project.id"))

    project = relationship("Project", back_populates="articles")
    filtered_articles = relationship("FilteredArticle", back_populates="article")
    reviews = relationship("Review", back_populates="article")
    citing_articles = relationship("Citation", foreign_keys="[Citation.citing_article_id]", back_populates="citing_article")
    cited_articles = relationship("Citation", foreign_keys="[Citation.cited_article_id]", back_populates="cited_article")
