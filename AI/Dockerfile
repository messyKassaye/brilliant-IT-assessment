FROM python:3.9

WORKDIR /app/AI


# Copy the requirements.txt file and install the dependencies
COPY requirements.txt /app/AI/

# Upgrade pip
RUN pip install --upgrade pip


RUN pip install --no-cache-dir -r requirements.txt



# Install the spaCy model
RUN python -m spacy download en_core_web_sm


# Copy the entire project into the container
COPY . /app/AI/

EXPOSE 8000


CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
