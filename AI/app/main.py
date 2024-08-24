import nltk
from nltk.data import find

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .core.settings import settings
from .api.v1.endpoints.documents import router as documents_router

def download_nltk_resource(resource_name):
    try:
        find(f'tokenizers/{resource_name}')
    except LookupError:
        nltk.download(resource_name)

#download nltk resources
download_nltk_resource('punkt_tab')
download_nltk_resource('stopwords')

app = FastAPI()
app.add_middleware(CORSMiddleware,
    allow_origins=settings.cors_origins,  # Allow these origins
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods
    allow_headers=["*"]
    )

#include other routes
app.include_router(documents_router,prefix='/documents', tags=['documents'])

@app.get('/health')
def api_health():
    return {
        "status":True,
        "message":"AI api health is good"
        }
