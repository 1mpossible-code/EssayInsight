import PredictionService
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    essay = data['essay']
    prediction = service.predict_essay(essay)
    return jsonify({'prediction': prediction})

if __name__ == '__main__':
    service = PredictionService('model.h5', 'tokenizer.pickle')
    app.run()
