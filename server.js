const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars')
const app = express();
const PORT = process.env.PORT || 3000;


const router = require('./controllers/burgers_controller.js');



console.log(path.join(__dirname, './views/public'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(router);

app.listen(PORT, (err) => {
    if (err) return console.log(err);
    console.log(`APP LISTENING ON PORT: ${PORT}`);
})