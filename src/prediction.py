import numpy as np
import cv2
from keras.models import load_model

model = load_model('models/pneumoscan_model.keras')
img_size = 150


def prepare(filepath):
    img_array = cv2.imread(filepath, cv2.IMREAD_GRAYSCALE)
    resized_arr = cv2.resize(img_array, (img_size, img_size))
    return resized_arr.reshape(-1, img_size, img_size, 1) / 255.0


def predict(filepath):
    prepared_image = prepare(filepath)
    prediction = model.predict(prepared_image)
    return "PNEUMONIA" if prediction[0][0] > 0.5 else "NORMAL"

# Example usage
# prediction = predict('path_to_xray_image')
# print(prediction)
