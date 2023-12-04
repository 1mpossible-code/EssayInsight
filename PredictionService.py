import tensorflow as tf
from tensorflow.keras.preprocessing.sequence import pad_sequences
from tensorflow.keras.models import load_model
import pickle

class EssayPredictionService:
    def __init__(self, model_path, tokenizer_path, max_length=300):
        self.model = load_model(model_path)
        with open(tokenizer_path, 'rb') as handle:
            self.tokenizer = pickle.load(handle)
        self.max_length = max_length
    
    def predict_essay(self, essay):
        preprocessed_essay = self.preprocess_essay(essay)
        prediction = self.model.predict(preprocessed_essay)
        return prediction[0][0]
    
    def preprocess_essay(self, essay):
        sequences = self.tokenizer.texts_to_sequences([essay])
        padded = pad_sequences(sequences, maxlen=self.max_length, padding='post', truncating='post')
        return padded

if __name__ == '__main__':
    # Usage example
    service = EssayPredictionService('model.h5', 'tokenizer.pickle')
    essay = "This is an example essay."
    prediction = service.predict_essay(essay)
    print(prediction)
