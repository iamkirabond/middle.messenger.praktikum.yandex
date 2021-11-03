const express = require('express');

const app = express();
const port = process.env.PORT || PORT;
const path = require('path');

app.use(express.static(`${__dirname}/dist`));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.listen(port, () => {
  console.log(`ready to go on port ${PORT}`);
});
