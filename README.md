# Brilliant QA system assessment

This assessment is created with Docker container and Manual installation as well. Mainly the project is divided into 3 projects. These are AI, backend and Frontend

1. AI

   This project is mainly used for NLP analysis, pinecone, and vector generations. The project is created with the FastAPI python framework which is simple and useful to work with AI, Machine learning, and data science development. mainly I used it for document analysis like PDF, DOC, Text files, and Excel. So Tokenization, filtering Stop words, filtering Named entities, and Sentiment analysis is developed using this project To create this project I used some Python libraries like Numpy, torch, pinecone, and spacY

2. Backend

   This project is created with ExpressJS which mainly used to act as a middleman between the AI and Frontend project.

   ### what it do

   1. It receives document from frontend side and pass to AI project. In this process file is uploaded using memory storage from backend side and disk storage storage inside AI project. So documents mainly stored inside AI project. It send documents and receives response from AI server and send back to frontend app
   2. It interacts with **Open AI API**. Like it sends questions and receives reply from **Open AI API** and send to frontend app.

3. Frontend

   This project is created using React typescript and AntD for UI and tailwind CSS for CSS style. This project's main purpose is to visualize what is happening and to display the result. Seeing is believing that is what it does

   ## How to run the project

   You can run this project with two ways of method. These are **Docker** and **Manual installation**

   **Note**

   please change all **.env.example** file into **.env**. After changing please provide your API key with your own API key

   ### 1. Docker installation

   #### Prerequisites

   Before you begin, ensure you have the following installed on your machine:

   - [Docker](https://www.docker.com/get-started)
   - [Docker Compose](https://docs.docker.com/compose/install/)

   1. clone the repository

      ```bash
      git https://github.com/messyKassaye/brilliant-IT-assessment
      ```

   2. build Docker image

      ```base
      docker-compose build
      ```

   3. Start the application
      ```base
      docker-compose up
      ```

   ### 1. Manual installation

   ## 1. How to run **AI**

   #### Prerequisites

   you need to have python on your machine. if you don't have it you can install at below link and configure with your machine like environment variable for Window system

   - [Python](https://www.python.org/)

   After installing Python or if you already installed python previously. you go ahead with the following commands

   1. Create Virtual environment for this project

      ```base
      python -m venv .venv
      ```

   2. activate your virtual environment

      for windows

      ```base
      .\.venv\Scripts\activate
      ```

      for MAC and Linux

      ```base
      source .\.venv\Scripts\activate

      ```

   3. Install dependencies
      all dependencies are place inside requirements.txt file
      ```base
      pip install -r requirements.txt
      ```
   4. Install space model for our NLP analysis for Vector and sentiment analysis

      ```base
      python -m spacy download en_core_web_sm
      ```

   5. finally we can start FastAPI server using Uvicorn
      ```base
      uvicorn app.main:app --reload
      ```
   6. done

   ## 2. How to run Backend

   #### Prerequisites

   To install this backend project you need to have install nodeJS to your machine. To install it please download node from below link

   - [NodeJS](https://nodejs.org/en)

   ## 1. install dependencies

   ```base
   npm install
   ```

   ## 2. run the project

   ```base
   npm start
   ```

## 2. How to run Frontend

#### Prerequisites

To install this backend project you need to have install nodeJS to your machine. To install it please download node from below link

- [NodeJS](https://nodejs.org/en)

## 1. install dependencies

```base
npm install
```

sometime you may get peer dependencies issue. so please run the below command if you this err

```base
npm install --legacy-peer-deps
```

## 2. run the project

```base
npm start
```

### finally output

![Full Screen shot](./screenshots/first_screen.png)

![Screen shot](./screenshots/second_screen_shot.png)
