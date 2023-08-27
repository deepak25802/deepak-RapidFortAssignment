const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const mime = require('mime');
const { type } = require('os');
const PORT = 5050;
const app = express();

app.use(cors());

const storage = multer.diskStorage({
    destination: path.join(__dirname, 'upload'),
    filename : (req, file, callback) => {
        callback(null, file.originalname);
    }
});

const uploads = multer({ storage });

// to define the route to handle the post requests 
// sends the file to be uploaded to the server 
app.post("/uploads", uploads.single("file"),  (req, res) => {
    // will respond the client with the below status on the successfull file upload
    // console.log(req.file);
    if(req.file === undefined) {
      res.json({status : "file not uploaded"});
    }
    else 
      res.json({status : "Files Uploaded!"});
});

app.use(express.static(path.join(__dirname)));

// Route for serving index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// to define the route to handle the get request 
// gets information about the file from the server
app.get('/getinfo/:filename', (req, res) => {
    const { filename } = req.params;
    if(filename === "" || filename === "undefined"){
      res.status(400).json({status : "file not found"});
    } else {
      const filePath = path.join(__dirname, 'upload', filename);
      const fileStats = fs.statSync(filePath);
      const fileInfo = {
        "name" : filename,
        "size" : fileStats.size,
      }
      res.json({ fileinfo: fileInfo });
    }
});

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});