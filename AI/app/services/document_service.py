from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from app.models.loader import nlp, sentiment_analyzer

async def NLP_analysis(text):
    # Tokenization
    tokens = word_tokenize(text.lower())
    
    # Truncate tokens if they exceed the maximum length
    max_length = 512
    if len(tokens) > max_length:
        tokens = tokens[:max_length]

    
    # Remove stop words
    stop_words = set(stopwords.words('english'))
    tokens = [word for word in tokens if word.isalpha() and word not in stop_words]

    # Convert the truncated tokens back to text for sentiment analysis
    truncated_text = ' '.join(tokens)

    # Sentiment analysis
    sentiment = sentiment_analyzer(truncated_text)

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