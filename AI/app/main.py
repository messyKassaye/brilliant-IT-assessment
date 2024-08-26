import nltk
from nltk.data import find

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .core.settings import settings
from .api.v1.endpoints.documents import router as documents_router
from .api.v1.endpoints.pinecone import router as pinecone_router


app = FastAPI()
app.add_middleware(CORSMiddleware,
    allow_origins=settings.cors_origins,  # Allow these origins
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods
    allow_headers=["*"]
    )

#include other routes
app.include_router(documents_router,prefix='/documents', tags=['documents'])
app.include_router(pinecone_router,prefix='/pinecone', tags=['pinecone'])
@app.get('/health')
def api_health():
    return {
        "status":True,
        "message":"AI api health is good"
        }
