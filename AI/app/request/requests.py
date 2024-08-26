from pydantic import BaseModel
from typing import List

class WordVectorRequest(BaseModel):
    words: list[str]


class VectorQueryRequest(BaseModel):
    query: str
    top_k: int = 3 # nearest neighbor vectors

class DeleteIndexRequest(BaseModel):
    index_name: str