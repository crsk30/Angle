const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Multer configuration for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Sample product data
let products = [
    { id: 1, name: 'Product 1', code: 'P1', category: ['Category 1'], description: 'Description 1', },
    { id: 2, name: 'Product 2', code: 'P2', category: ['Category 2'], description: 'Description 2', },
    { id: 3, name: 'Product 3', code: 'P3', category: ['Category 1'], description: 'Description 3', },
    { id: 4, name: 'Product 4', code: 'P4', category: ['Category 3'], description: 'Description 4', },
    { id: 5, name: 'Product 5', code: 'P5', category: ['Category 2'], description: 'Description 5', },
    { id: 6, name: 'Product 6', code: 'P6', category: ['Category 3'], description: 'Description 6', },
    { id: 7, name: 'Product 7', code: 'P7', category: ['Category 1'], description: 'Description 7', },
    { id: 8, name: 'Product 8', code: 'P8', category: ['Category 2'], description: 'Description 8', },
    { id: 9, name: 'Product 9', code: 'P9', category: ['Category 3'], description: 'Description 9', },
    { id: 10, name: 'Product 10', code: 'P10', category: ['Category 1'], description: 'Description 10',},
    { id: 11, name: 'Product 11', code: 'P11', category: ['Category 2'], description: 'Description 11',},
    { id: 12, name: 'Product 12', code: 'P12', category: ['Category 3'], description: 'Description 12',},
    { id: 13, name: 'Product 13', code: 'P13', category: ['Category 1'], description: 'Description 13',},
    { id: 14, name: 'Product 14', code: 'P14', category: ['Category 2'], description: 'Description 14',},
    { id: 15, name: 'Product 15', code: 'P15', category: ['Category 3'], description: 'Description 15',},
    { id: 16, name: 'Product 16', code: 'P16', category: ['Category 1'], description: 'Description 16',},
    { id: 17, name: 'Product 17', code: 'P17', category: ['Category 2'], description: 'Description 17',},
    { id: 18, name: 'Product 18', code: 'P18', category: ['Category 3'], description: 'Description 18',},
    { id: 19, name: 'Product 19', code: 'P19', category: ['Category 1'], description: 'Description 19',},
    { id: 20, name: 'Product 20', code: 'P20', category: ['Category 2'], description: 'Description 20',},
  ];
  

app.get('/api/products', (req, res) => {
  const page = req.query.page || 1;
  const limit = 8;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const results = products.slice(startIndex, endIndex);

  res.json({
    products: results,
    page: page,
    totalPages: Math.ceil(products.length / limit),
  });
});

app.post('/api/products', upload.single('image'), (req, res) => {
  const { name, code, category, description } = req.body;
  const image = req.file.filename;

  // Validate unique name and code
  if (products.some((product) => product.name === name || product.code === code)) {
    return res.status(400).json({ error: 'Name or code already exists.' });
  }

  const newProduct = {
    id: products.length + 1,
    name,
    code,
    category,
    description,
    image,
  };

  products.push(newProduct);

  res.json(newProduct);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
