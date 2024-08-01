# PneumoScan: Pneumonia Detection Model

## Project Overview

This project involves building a machine learning model to classify whether a patient has pneumonia based on chest X-ray images. The project includes model training, deployment, API creation for prediction, and integration with a React application (scap_app).

## Features

- Model Training: Developed a convolutional neural network (CNN) model to classify pneumonia using chest X-ray images.
- Model Deployment: Saved and loaded the trained model into a new environment.
- API Creation: Built an API using FastAPI to handle predictions.
- React Integration: Linked the FastAPI API to a React frontend (scap_app) for an interactive user experience.

## How to start the app

### SetUp

- Install python

- Clone the Repository
sh
Copy code
`` git clone https://github.com/your-username/pneumoscan.git ``

``cd pneumoscan``

- Install Dependencies
``pip install -r requirements.txt``

- Model Training
- Train the Model

``python src/model.py``

- Save the Model
The trained model will be saved as ``optimized_model.keras`` in the models directory.

- Model Deployment
Load the Model into a New Environment
sh

`` python src/import_model.py ``

Launch the API
The API is implemented using FastAPI. To start the API server, run:

``uvicorn src.app:app --host 127.0.0.1 --port 8000 --reload``
The API will be accessible at http://127.0.0.1:8000.

### React Application

- Start the React App
Make sure you have the scap_app React application set up correctly. Follow the setup instructions provided in the ``scap_app`` repository to run the React application.

### API Endpoints

- Predict: /predict
- Method: POST
- Request Body: JSON containing the path to the chest X-ray image
- Response: Prediction result indicating the presence of pneumonia
Example Request:

``{
    "image_path": "path/to/xray/image.jpg"
}
``

### Usage

Predict Pneumonia
Use the React app or send a POST request to the /predict endpoint with the image path to receive a pneumonia prediction.

- Directory Structure

```text
PneumoScan/
├── data/
│   ├── train/
│   ├── test/
│   └── val/
├── models/
│   └── optimized_model.keras
├── notebook/
│   └── PneumoScan.ipynb
├── Scan_app/
│   ├── Chest-xray-server/
│   ├── node_modules/
│   ├── public/
│   └── src/
├── src/
│   ├── preprocessing.py
│   ├── model.py
│   ├── prediction.py
│   └── app.py
```

### Demo

- A video demonstration of the application
[![Video Thumbnail](https://img.youtube.com/vi/VIDEO_ID/0.jpg)](https://www.youtube.com/watch?v=2yEq8LCStvc)


### Conclusion

PneumoScan demonstrates a complete MLOps workflow, from model development to deployment and integration with a web interface. This project provides a practical example of deploying a machine learning model in a real-world application, specifically for medical imaging and diagnosis. By following the outlined steps, you can recreate and extend this project for similar use cases.
