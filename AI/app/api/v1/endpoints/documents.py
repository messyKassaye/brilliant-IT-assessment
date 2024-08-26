from fastapi import APIRouter, File, UploadFile
from fastapi.responses import JSONResponse
import os
from app.utils.file_utils import read_docx, read_excel, read_pdf
from app.services.document_service import NLP_analysis

router = APIRouter()

#file destinations
uploads_dir = 'uploads/'
os.makedirs(uploads_dir, exist_ok=True)


@router.post('/uploadFile')
async def upload_file(file: UploadFile = File(...)):
    file_location = os.path.join(uploads_dir,file.filename)
    full_url = f"http://127.0.01:8000/{file_location}"
    
    #upload file
    with open(file_location, 'wb') as file_object:
        file_object.write(await file.read())
    
    filename = file.filename
    if filename.endswith(".pdf"):
        text = read_pdf(file_location)
    elif filename.endswith(".docx"):
        text = read_docx(file_location)
    elif filename.endswith('.doc'):
        text = read_docx(file_location)
    elif filename.endswith(".xlsx"):
        text = read_excel(file_location)
    else:
        return JSONResponse(status_code=400,content={'error':'Unsupported file type'})
    
    # Perform NLP analysis
    analysis_results = await NLP_analysis(text)
    return JSONResponse(content={"fileName": file.filename,'filePath':full_url, "result": analysis_results})
