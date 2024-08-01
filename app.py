from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
import uvicorn
from keras.models import load_model
import numpy as np
import cv2

app = FastAPI()

# Load your model
model = load_model('models/optimized_model.keras')

img_size = 150


def preprocess_image(image_bytes):
    img_arr = np.frombuffer(image_bytes, np.uint8)
    img = cv2.imdecode(img_arr, cv2.IMREAD_GRAYSCALE)
    resized_img = cv2.resize(img, (img_size, img_size))
    normalized_img = resized_img / 255.0
    return normalized_img.reshape(-1, img_size, img_size, 1)


@app.get("/")
async def root():
    return {"message": "Welcome to the API"}

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    image = await file.read()
    preprocessed_image = preprocess_image(image)
    prediction = model.predict(preprocessed_image)
    result = "Pneumonia" if prediction[0][0] > 0.5 else "Normal"
    return JSONResponse(content={"prediction": result})

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000, log_level="info")
