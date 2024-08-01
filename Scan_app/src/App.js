import React, { useState, useEffect } from "react";
import "./ChestXRayUI.css";

const API_URL = "http://localhost:3001";

const ChestXRayUI = () => {
  const [normalImages, setNormalImages] = useState([]);
  const [pneumoniaImages, setPneumoniaImages] = useState([]);
  const [activeCategory, setActiveCategory] = useState("normal");
  const [prediction, setPrediction] = useState(null);

  useEffect(() => {
    fetchImages("normal");
    fetchImages("pneumonia");
  }, []);

  const fetchImages = async (category) => {
    try {
      const response = await fetch(`${API_URL}/api/images/${category}`);
      const imageFiles = await response.json();
      const imageUrls = imageFiles.map(
        (file) => `${API_URL}/images/${category}/${file}`
      );

      if (category === "normal") {
        setNormalImages(imageUrls);
      } else {
        setPneumoniaImages(imageUrls);
      }
    } catch (error) {
      console.error(`Error fetching ${category} images:`, error);
    }
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    console.log("Image uploaded:", file);
    // TODO: Implement actual image upload to server
    // For now, we'll just simulate adding the image locally
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

        {/* ... (rest of the JSX remains the same) ... */}

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
