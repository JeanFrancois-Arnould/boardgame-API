require('dotenv').config();

const express = require('express');

//const router = require('./app/router');

const app = express();
//app.use(router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
console.log(`Listening on ${PORT
}`);
});