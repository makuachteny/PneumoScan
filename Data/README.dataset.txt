# Chest X-Rays > 2022-08-16 10:39am
https://universe.roboflow.com/classification/chest-x-rays-qjmia

Provided by Roboflow
License: CC BY 4.0

### This classification dataset is  [from Kaggle](https://www.kaggle.com/paultimothymooney/chest-xray-pneumonia) and was uploaded to Kaggle by [Paul Mooney](https://www.kaggle.com/paultimothymooney).
### It contains over 5,000 images of chest x-rays in two categories: "PNEUMONIA" and "NORMAL."
* Version 1 contains the raw images, and only has the pre-processing feature of "Auto-Orient" applied to strip out EXIF data, and ensure all images are "right side up."
* Version 2 contains the raw images with pre-processing features of "Auto-Orient" and Resize of 640 by 640 applied
* Version 3 was trained with Roboflow's model architecture for classification datasets and contains the raw images with pre-processing features of "Auto-Orient" and Resize of 640 by 640 applied + augmentations:
	* Outputs per training example: 3
	* Shear: ±3° Horizontal, ±2° Vertical
	* Saturation: Between -5% and +5%
	* Brightness: Between -5% and +5%
	* Exposure: Between -5% and +5%

### Below you will find the description provided on Kaggle:

#### Context
http://www.cell.com/cell/fulltext/S0092-8674(18)30154-5
![Figure S6](https://i.imgur.com/jZqpV51.png)
Figure S6. Illustrative Examples of Chest X-Rays in Patients with Pneumonia, Related to Figure 6
The normal chest X-ray (left panel) depicts clear lungs without any areas of abnormal opacification in the image. Bacterial pneumonia (middle) typically exhibits a focal lobar consolidation, in this case in the right upper lobe (white arrows), whereas viral pneumonia (right) manifests with a more diffuse ‘‘interstitial’’ pattern in both lungs.
http://www.cell.com/cell/fulltext/S0092-8674(18)30154-5

#### Content
The dataset is organized into 3 folders (train, test, val) and contains subfolders for each image category (Pneumonia/Normal). There are 5,863 X-Ray images (JPEG) and 2 categories (Pneumonia/Normal).

Chest X-ray images (anterior-posterior) were selected from retrospective cohorts of pediatric patients of one to five years old from Guangzhou Women and Children’s Medical Center, Guangzhou. All chest X-ray imaging was performed as part of patients’ routine clinical care.

For the analysis of chest x-ray images, all chest radiographs were initially screened for quality control by removing all low quality or unreadable scans. The diagnoses for the images were then graded by two expert physicians before being cleared for training the AI system. In order to account for any grading errors, the evaluation set was also checked by a third expert.

#### Acknowledgements
Data: https://data.mendeley.com/datasets/rscbjbr9sj/2

License: CC BY 4.0

Citation: http://www.cell.com/cell/fulltext/S0092-8674(18)30154-5
![citation - latest version (Kaggle)](https://i.imgur.com/8AUJkin.png)

#### Inspiration
Automated methods to detect and classify human diseases from medical images.