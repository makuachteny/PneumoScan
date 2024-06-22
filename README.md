# Pneumonia Detection from Chest X-ray Images using Convolutional Neural Networks (CNNs)

This project aims to develop a deep learning model to automate the classification of chest X-ray images into normal and pneumonia-affected classes using Convolutional Neural Networks (CNNs). The models are trained on a publicly available dataset of chest X-ray images and evaluated based on their accuracy and other performance metrics.

## Objective

The primary goal of this project is to build and compare two models:
1. **Baseline Model**: A simple neural network without advanced optimizations.
2. **Optimized CNN Model**: A CNN model enhanced with data augmentation, multiple convolutional layers, pooling layers, dropout, and other optimization techniques.

## Dataset

The dataset consists of 5,863 high-quality chest X-ray images, categorized into two classes: normal and pneumonia-affected. It is divided into training, validation, and test sets to facilitate model development and evaluation.

## Models Implemented

### 1. Baseline Model (Simple Neural Network)
- Input Layer: Flattened input images (150x150x1).
- Architecture: Dense layers with ReLU activation.
- Training: Adam optimizer, binary cross-entropy loss.

### 2. Optimized CNN Model
- Architecture:
  - Conv2D layers with ReLU activation.
  - MaxPool2D layers for downsampling.
  - Dropout layers for regularization.
- Training: Adam optimizer, binary cross-entropy loss, with data augmentation.

## Evaluation

Both models were evaluated on the test set using standard evaluation metrics:
- Accuracy
- Precision
- Recall
- F1-score
- Confusion Matrix

## Results

- **Baseline Model**:
  - Test Accuracy: ~75.00%
  - Performance: Moderate precision, recall, and F1-score.
  
- **Optimized CNN Model**:
  - Test Accuracy: ~85.00%
  - Performance: Higher precision, recall, and F1-score compared to the baseline model.

## Conclusion

The optimized CNN model outperformed the baseline model, demonstrating the effectiveness of CNNs and optimization techniques in pneumonia detection from chest X-ray images. This project highlights the importance of model architecture, data preprocessing, and augmentation in improving classification accuracy and robustness.

## Future Enhancements

- Fine-tuning hyperparameters for better performance.
- Implementing transfer learning with pre-trained models.
- Exploring advanced architectures like ResNet or DenseNet.

## Libraries Used

- Python
- Keras
- TensorFlow
- NumPy
- Pandas
- Matplotlib
- Seaborn
- Scikit-learn

## How to Use the Saved Models

I have saved the models in the saved_models folder as  (`optimized_model.keras` and `simple_model.keras`), you can load them for making predictions on new data or further evaluation.

### Loading and Using the Models

1. **Load the Models**: Load the saved models using Keras.

   ```python
   from keras.models import load_model

   # Load the optimized CNN model
   optimized_model = load_model('optimized.keras')

   # Load the simple model
   simple_model = load_model('simple.keras')

Feel free to adjust parameters, explore different architectures, or use different datasets for further experimentation and improvement.