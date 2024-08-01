const express = require("express");
const fs = require("fs").promises;
const path = require("path");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(cors());

// Assuming the images are in the same directory as the server file
const imageDirectory = path.join(__dirname, "data", "train");

// Middleware to check if the image directory exists
const checkImageDirectory = async (req, res, next) => {
  try {
    await fs.access(imageDirectory);
    next();
  } catch (error) {
    console.error(`Image directory not found: ${imageDirectory}`);
    res.status(500).json({ error: "Server configuration error" });
  }
};

app.use(checkImageDirectory);

app.get("/api/images/:category", async (req, res) => {
  const { category } = req.params;
  const categoryPath = path.join(imageDirectory, category);

  try {
    await fs.access(categoryPath);
  } catch (error) {
    console.error(`Category directory not found: ${categoryPath}`);
    return res.status(404).json({ error: "Category not found" });
  }

  try {
    const files = await fs.readdir(categoryPath);
    const imageFiles = files.filter((file) =>
      [".png", ".jpg", ".jpeg"].includes(path.extname(file).toLowerCase())
    );
    res.json(imageFiles);
  } catch (error) {
    console.error(`Error reading directory: ${error}`);
    res.status(500).json({ error: "Unable to read image directory" });
  }
});

app.use("/images", express.static(imageDirectory));

app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something broke!" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`Serving images from: ${imageDirectory}`);
});
