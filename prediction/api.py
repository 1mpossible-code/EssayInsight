from EssayPredictionService import EssayPredictionService
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    essay = data['essay']
    service = EssayPredictionService('model.h5', 'tokenizer.pickle')
    prediction = service.predict_essay(essay)
    return jsonify({'prediction': '{:.2f}'.format(prediction)})

if __name__ == '__main__':
    # Usage example
    import os
    print(os.getcwd())
    service = EssayPredictionService('./data/model.h5', './data/tokenizer.pickle')
    app.run(port=5001, host='0.0.0.0')
