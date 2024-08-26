from app.core.settings import settings
import nltk
from nltk.data import find
from transformers import pipeline
import spacy

from pinecone import Pinecone, ServerlessSpec

from sentence_transformers import SentenceTransformer


def download_nltk_resource(resource_name):
    try:
        find(f'tokenizers/{resource_name}')
    except LookupError:
        nltk.download(resource_name)

# Download nltk resources
download_nltk_resource('punkt')
download_nltk_resource('stopwords')

# Load spacy models
sentiment_analyzer = pipeline('sentiment-analysis')
nlp = spacy.load('en_core_web_sm')

# Initialize Pinecone and create to the index
pinecone_model = SentenceTransformer('all-MiniLM-L6-v2')
index_name = "word-vectors"
dimension =  384 # pinecone_model.get_sentence_embedding_dimension()

pc = Pinecone(api_key=settings.pinecone_api_key)

# Check if the index already exists and create it if not
if index_name not in pc.list_indexes():
    try:
        pc.create_index(name=index_name,
                        dimension=dimension,
                        metric='euclidean',
                        spec=ServerlessSpec(
                            cloud=settings.pinecone_cloud,
                            region=settings.pinecone_region
                        ))
    except Exception as e:
        if "ALREADY_EXISTS" in str(e):
            print(f"Index '{index_name}' already exists. Connecting to the existing index.")
        else:
            raise e

# Connect to the index
pinecone_index = pc.Index(index_name)
