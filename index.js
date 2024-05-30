const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.send('Merhaba Dünya!');
});

app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} adresinde çalışıyor.`);
});
