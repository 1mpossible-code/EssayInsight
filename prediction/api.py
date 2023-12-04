from EssayPredictionService import EssayPredictionService
from flask import Flask, request, jsonify

app = Flask(__name__)

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
    app.run()
