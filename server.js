import express, { static } from 'express';

const app = express();
const port = process.env.PORT || PORT;
import { join } from 'path';

app.use(static(`${__dirname}/dist`));

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '/dist/index.html'));
});

app.listen(port, () => {
  console.log(`App on port ${PORT}`);
});
