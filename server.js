const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const router = require('./controllers/burgers_controller.js');

app.use(router);

app.listen(PORT, (err) => {
    if (err) return console.log(err);
    console.log(`APP LISTENING ON PORT: ${PORT}`);
})