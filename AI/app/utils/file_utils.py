from docx import Document
import PyPDF2
import pandas as pd

def read_pdf(file_path):
    with open(file_path, 'rb') as file:
        reader = PyPDF2.PdfReader(file)
        text = ''
        for page in reader.pages:
            text += page.extract_text() + '\n'
    return text

def read_docx(file_path):
    doc = Document(file_path)
    text = ''
    for paragraph in doc.paragraphs:
        text += paragraph.text + '\n'
    return text

def read_excel(file_path):
    df = pd.read_excel(file_path)
    return ' '.join(df.astype(str).values.flatten())  # Convert all values to string and join
