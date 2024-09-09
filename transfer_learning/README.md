## Machine learning techniques

### Trasfer learning
#### Objective:
- Apply transfer learning techniques to the dataset used in the pneumoscan machine learning pipeline.
- Leverage and fine tune pre-trained models to reduce reduce training time and improve performance.

### Problem Statement
 Pneumonia is a critical respiratory infection often diagnosed through chest X-ray imaging. Manual interpretation of these images can be time-consuming and prone to errors. This project aims to develop machine learning models to automate the classification of chest X-rays into normal and pneumonia-affected categories using convolutional neural networks (CNNs).


### Dataset
- This classification dataset is  [from Kaggle](https://www.kaggle.com/paultimothymooney/chest-xray-pneumonia) and was uploaded to Kaggle by [Paul Mooney](https://www.kaggle.com/paultimothymooney).
- It contains over 5,000 images of chest x-rays in two categories: "PNEUMONIA" and "NORMAL."

### Evaluation metrics
- To check the performance of the models: 
    1. Accuracy; it measures how often the classifier correctly predicts. 

    2. Confusion matrix; descibes the performance of a classification model on a set of the test data for which the true values are known.
    3. Precision; explains how many of the correctly predicted cases actually turned out to be positive.
    Recall: The ratio of correctly predicted positive observations to the total actual positives.

    4. F1 Score: it is the harmonic mean of precision and recall. It is maximum when precision is equal to recall.

### Significance of transfer learning.
- **Fast Convergence**: Since pre-trained models already contain useful image feature detectors, fine-tuning them on a smaller dataset significantly reduces training time and leads to quicker convergence.
- **Generalization**: Transfer learning allows models trained on large datasets like ImageNet to generalize well, even in medical imaging tasks where domain-specific data might be limited.
- **Improved Accuracy***: Fine-tuned models outperform models trained from scratch due to the knowledge gained from previous training on large datasets.


### Limitations of Transfer Learning:
- **Computational Resources**: Fine-tuning deep architectures such as ResNet50 or InceptionV3 can be computationally expensive, requiring substantial memory and GPU resources.
- **Dataset Size**: Although transfer learning helps with small datasets, it still requires a sufficiently large and diverse dataset for fine-tuning to avoid overfitting.
- **Domain-Specific Features**: Pre-trained models may not be able to fully capture the unique patterns of medical images (e.g., subtle pneumonia indicators) that were not present in the original training dataset.


### Experimental Results
We evaluated the performance of three fine-tuned pre-trained models: VGG16, ResNet50, and InceptionV3. Below is the comparison table based on the evaluation metrics:

| **Model**     | **Accuracy** | **Precision** | **Recall** | **F1-Score** |
|---------------|--------------|---------------|------------|--------------|
| VGG16         | 92.5%        | 91.0%         | 93.0%      | 92.0%        |
| ResNet50      | 94.1%        | 93.5%         | 94.8%      | 94.1%        |
| InceptionV3   | 93.4%        | 92.8%         | 93.2%      | 93.0%        |
