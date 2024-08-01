import React, { useState, useEffect } from "react";
import "./App.css";

const ChestXRayUI = () => {
  const [normalImages, setNormalImages] = useState([]);
  const [pneumoniaImages, setPneumoniaImages] = useState([]);
  const [activeCategory, setActiveCategory] = useState("normal");
  const [prediction, setPrediction] = useState(null);

  useEffect(() => {
    // Fetch images when the component mounts
    fetchImages("normal");
    fetchImages("pneumonia");
  }, []);

  const fetchImages = async (category) => {
    try {
      const imageCount = category === "normal" ? 50 : 50; 
      const images = Array.from(
        { length: imageCount },
        (_, i) => `/data/train/${category}/${i + 1}.jpeg`
      );

      if (category === "normal") {
        setNormalImages(images);
      } else {
        setPneumoniaImages(images);
      }
    } catch (error) {
      console.error(`Error fetching ${category} images:`, error);
    }
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    console.log("Image uploaded:", file);
    // Implement your actual image upload and prediction logic here
    // For now, we'll just add the uploaded image to the current category
    const newImage = URL.createObjectURL(file);
    if (activeCategory === "normal") {
      setNormalImages((prev) => [newImage, ...prev]);
    } else {
      setPneumoniaImages((prev) => [newImage, ...prev]);
    }
    // Simulating API call for prediction
    setTimeout(() => {
      setPrediction(
        `Sample prediction: ${
          activeCategory === "normal" ? "Normal" : "Pneumonia"
        }`
      );
    }, 1000);
  };

  const toggleCategory = () => {
    setActiveCategory((prev) => (prev === "normal" ? "pneumonia" : "normal"));
  };

  const activeImages =
    activeCategory === "normal" ? normalImages : pneumoniaImages;

  return (
    <div className="chest-xray-app">
      <div className="container">
        <h1 className="title">Chest X-Rays Computer Vision Project</h1>

        <div className="card upload-card">
          <h2 className="card-title">Try This Model</h2>
          <div className="upload-area">
            <p className="upload-text">Drop an image or browse your device</p>
            <input
              type="file"
              onChange={handleImageUpload}
              accept="image/*"
              id="image-upload"
              className="file-input"
            />
            <label htmlFor="image-upload" className="upload-button">
              Browse
            </label>
          </div>
        </div>

        {prediction && (
          <div className="card prediction-card">
            <h2 className="card-title">Prediction Result</h2>
            <p>{prediction}</p>
          </div>
        )}

        <div className="category-toggle">
          <button onClick={toggleCategory} className="toggle-button">
            {activeCategory === "normal" ? "Show Pneumonia" : "Show Normal"}
          </button>
        </div>

        <h2 className="section-title">
          {activeCategory === "normal" ? "Normal" : "Pneumonia"} Images
        </h2>
        <div className="image-grid">
          {activeImages.map((image, index) => (
            <div key={index} className="image-item">
              <img
                src={image}
                alt={`Chest X-Ray ${index + 1}`}
                className="x-ray-image"
              />
            </div>
          ))}
        </div>
        <p className="image-count">{activeImages.length} images</p>
      </div>
    </div>
  );
};

export default ChestXRayUI;
