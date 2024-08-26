from app.models.loader import pinecone_model, pinecone_index, pc
from typing import List

async def generate_vector(words: List[str]):
    vectors = pinecone_model.encode(words)
    vector_tuples = [(word, vector.tolist()) for word, vector in zip(words, vectors)]
    pinecone_index.upsert(vectors=vector_tuples)
    return vector_tuples

async def query_vectors(query: str, top_k: int):
    query_vector = pinecone_model.encode([query])[0].tolist()
    result = pinecone_index.query(queries=[query_vector], top_k=top_k)
    
    return result

async def delete_index(index_name: str):
    if index_name in pc.list_indexes():
        pc.delete_index(index_name)
        return {'status':True,'message':'Index deleted successfully'}
    else:
        return {
            'status':False,
            'message': 'Index not found'
        }
    