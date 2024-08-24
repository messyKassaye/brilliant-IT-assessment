from fastapi.testclient import TestClient
from app.main import app
from app.core.settings import settings

client = TestClient(app)

def test_api_health():
    response = client.get('/health')
    assert response.status_code == 200
    assert response.json() == {
        "status":True,
        "message":"AI api health is good"
    }
    
    

