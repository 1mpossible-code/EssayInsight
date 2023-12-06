# EssayInsight

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Setup and Installation](#setup-and-installation)
5. [Usage](#usage)
6. [How to Contribute](#how-to-contribute)
7. [License](#license)
8. [Team](#team)
9. [Acknowledgements](#acknowledgements)

## Introduction
EssayInsight is a web application that provides feedback on IELTS essays. It uses a machine learning model to predict the score of an essay and provides feedback on the essay based on the predicted score. The model was trained on a dataset of 1000 essays that were scored by IELTS examiners. The model was trained using TensorFlow and was deployed using Flask. The web application was built using Next.js and is hosted on Microsoft Azure.

## Features
Our web application provides the following features:
- Predicts the score of an essay
- Provides a user-friendly interface for users to submit their essays

The prediction algorithm was inspired by the fact that there was no reliable Open Source model to predict the score writing quality of an essay.

IELTS examiners use a rubric to score essays. The rubric consists of 4 categories: Task Achievement, Coherence and Cohesion, Lexical Resource, and Grammatical Range and Accuracy. Each category is scored on a scale of 0-9. 3/4 of the score is based on the text by itself and that was the reasoning why dataset is suitable for training the model for general use. 

The optimal length of an essay if 250 words with a minimum of 150 words and a maximum of 300 words. For the best results, the essay should be between 250-300 words.

## Technologies Used
- [Microsoft Azure](https://azure.microsoft.com/)
- [TensorFlow](https://www.tensorflow.org/)
- [Docker](https://www.docker.com/)
- [Next.js](https://nextjs.org/)
- [Flask](https://flask.palletsprojects.com/)


## Setup and Installation
The web application is hosted on Microsoft Azure. And can be accessed at [EssayInsight]().

### Local Installation

Since we created our release using Docker, it is very easy to set up the project locally. You can use the following commands to set up the project locally.

After cloning the repository and changing the working directory, run the following commands:

```bash
docker-compose up
```

_Note: to stop the containers, use `docker-compose down` or Ctrl+C in the terminal, while the containers are running._

## Usage

Our hosted solution can be accessed at [EssayInsight](). 

### Local Usage

After setting up the project locally, you can access the web application at [localhost:3000](http://localhost:3000/).

The API can be accessed at [localhost:5001/predict](http://localhost:5001/predict). The API can be used to make predictions on essays. The API accepts a **POST** request with the following JSON body:

```json
{
    "essay": "This is a sample essay."
}
```

The API will return a JSON response with the following format:

```json
{
    "prediction": 6.0,
}
```

Use the following command to make a request to the API:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"essay": "This is a sample essay."}' http://localhost:5001/predict
```

![Screenshot or GIF](url-to-image)

## How to Contribute
To contribute to this project, follow the steps below:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin <project_name>/<location>`
5. Create the pull request.

## License
This project is licensed under the [3-Clause BSD](LICENSE) license.

## Team
- [1mpossible-code](https://github.com/1mpossible-code)
- [gsiri-code](https://github.com/gsiri-code)

## Acknowledgements

Dataset used for training the model was obtained from [Kaggle](https://www.kaggle.com/datasets/mazlumi/ielts-writing-scored-essays-dataset).