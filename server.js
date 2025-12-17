const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Kết nối MongoDB
const mongoUrl = 'mongodb://mongo:27017/shopdb';

mongoose.connect(mongoUrl)
  .then(() => console.log('Đã kết nối MongoDB!'))
  .catch(err => console.error(err));

// Tạo mẫu dữ liệu
const Product = mongoose.model('Product', new mongoose.Schema({
  name: String,
  price: Number
}));

// API trang chủ
app.get('/', async (req, res) => {
  // Tạo dữ liệu giả nếu chưa có
  const count = await Product.countDocuments();
  if (count === 0) {
    await Product.create([
      { name: 'NodeJS Book', price: 150000 },
      { name: 'Khoa hoc Docker', price: 500000 }
    ]);
  }

  const products = await Product.find();
  
  let html = `<h1>Project 2: Node.js & MongoDB (Khác môi trường)</h1>`;
  html += `<h3>Sinh vien: LE MINH VU - DH52201771</h3><ul>`;
  products.forEach(p => {
    html += `<li>${p.name} - ${p.price} VND</li>`;
  });
  html += `</ul>`;
  
  res.send(html);
});

app.listen(port, () => {
  console.log(`App chạy tại http://localhost:${port}`);
});