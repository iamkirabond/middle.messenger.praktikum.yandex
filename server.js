
const express = require('express')
const app = express()
const port = process.env.PORT || PORT;


app.use(express.static(`${__dirname}/dist`));

app.listen(port, function() {
    console.log(`ready to go on port ${PORT}`);
});
