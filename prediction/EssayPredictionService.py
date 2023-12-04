import tensorflow as tf
from tensorflow.keras.preprocessing.sequence import pad_sequences
from tensorflow.keras.models import load_model
import pickle

class EssayPredictionService:
    _instance = None

    def __new__(cls, model_path, tokenizer_path, max_length=300):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            cls._instance.model = load_model(model_path)
            with open(tokenizer_path, 'rb') as handle:
                cls._instance.tokenizer = pickle.load(handle)
            cls._instance.max_length = max_length
        return cls._instance
    
    def predict_essay(self, essay):
        preprocessed_essay = self.preprocess_essay(essay)
        prediction = self.model.predict(preprocessed_essay)
        return prediction[0][0]
    
    def preprocess_essay(self, essay):
        sequences = self.tokenizer.texts_to_sequences([essay])
        padded = pad_sequences(sequences, maxlen=self.max_length, padding='post', truncating='post')
        return padded

if __name__ == '__main__':
    service = EssayPredictionService('./data/model.h5', './data/tokenizer.pickle')
    essay = "This is an example essay."
    prediction = service.predict_essay(essay)
    print(prediction)
