from fastapi import APIRouter, HTTPException
from app.request.requests import WordVectorRequest, VectorQueryRequest, DeleteIndexRequest
from app.services.pinecone_service import generate_vector, query_vectors, delete_index
router = APIRouter()

@router.post('/generateVector')
async def generateVector(request: WordVectorRequest):
    words_vector = await generate_vector(request.words)
    print(words_vector)
    return {
        'status':True,
        'message':"Vector generated successfully",
        'data':words_vector
    }

@router.post('/queryVector')
async def queryVector(request: VectorQueryRequest):
    result = query_vectors(request.query,request.top_k)
    
    if not result['matches']:
        raise HTTPException(status_code=404, detail="No matches found")

    matches = [{"word": match['id'], "score": match['score']} for match in result['matches']]
    return {"query": request.query, "matches": matches}

@router.delete('/deleteIndex')
async def deleteIndex(request: DeleteIndexRequest):
    result = delete_index(request.index_name)
    return result
    
    