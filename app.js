const express = require('express');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/index');


const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 5500;

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const bigMacController = require('./controllers/ipController');

app.get('/', (req, res) => res.send('server is up'));

app.use('/mac', routes);

server.listen(PORT, () => console.log(`connected at ${PORT}`));