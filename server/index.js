const express = require('express');
const bodyParser = require('body-parser');
const InMemoryDb = require('./inMemMongo');
const scoreBoard = require('./routes/score');
const cors = require("cors");
const logger = require("morgan");

const inMemoryDb = new InMemoryDb();
inMemoryDb.connect();
inMemoryDb.pushScoreBoardItemsToDb();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(logger("dev"));
app.use('/api/scoreBoard', scoreBoard);

const PORT = process.env.PORT || 3001;
app.listen(PORT, function() {
  console.log('Running!');
});


