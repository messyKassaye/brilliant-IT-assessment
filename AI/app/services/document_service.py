from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from transformers import pipeline
import spacy

sentiment_analyzer = pipeline('sentiment-analysis')
nlp = spacy.load('en_core_web_sm')

def NLP_analysis(text):
    # Tokenization
    tokens = word_tokenize(text.lower())
    
    # Remove stop words
    stop_words = set(stopwords.words('english'))
    tokens = [word for word in tokens if word.isalpha() and word not in stop_words]

    # Sentiment analysis
    sentiment = sentiment_analyzer(text)

    # Named Entity Recognition (NER)
    doc = nlp(text)
    entities = [(ent.text, ent.label_) for ent in doc.ents]
    
    return {
        'tokens': tokens,
        'sentiment': sentiment,
        'entities': entities,
        'text': text,
    }


def vector_analysis(text):
    doc = nlp(text)
    token_vectors = {token.text: token.vector.tolist() for token in doc}
    return {
        'token_vectors': token_vectors
    }