import tensorflow as tf
from tensorflow.keras.preprocessing.sequence import pad_sequences
from tensorflow.keras.models import load_model
import pickle

def load_saved_artifacts():
    """
    Load the saved model and tokenizer.
    """
    # Load the model
    model = load_model('model.h5')

    # Load the tokenizer
    with open('tokenizer.pickle', 'rb') as handle:
        tokenizer = pickle.load(handle)

    return model, tokenizer

def preprocess_new_essays(new_essays, tokenizer, max_length=300):
    """
    Preprocess new essays.
    """
    sequences = tokenizer.texts_to_sequences(new_essays)
    padded = pad_sequences(sequences, maxlen=max_length, padding='post', truncating='post')
    return padded

def predict_scores(new_essays, model, tokenizer, max_length=300):
    """
    Predict scores for new essays.
    """
    preprocessed_essays = preprocess_new_essays(new_essays, tokenizer, max_length)
    return model.predict(preprocessed_essays)

# Load the model and tokenizer
model, tokenizer = load_saved_artifacts()

# Example usage
new_essays = ["Your new essay text goes here.", "Another new essay text goes here."]
predicted_scores = predict_scores(new_essays, model, tokenizer)

# Displaying predicted scores
for essay, score in zip(new_essays, predicted_scores):
    print(f"Essay: {essay}\nPredicted Score: {score[0]}\n")
