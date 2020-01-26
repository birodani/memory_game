const mongoose = require('mongoose');
const {MongoMemoryServer} = require('mongodb-memory-server');
const ScoreBoardItem = require('./models/score');


const mongod = new MongoMemoryServer();

class InMemoryDb {

  constructor() {
    this.scoreBoardItems = [{
      name: 'James',
      timestamp: Date.now(),
      time: '19'
    },
      {
        name: 'Herold',
        timestamp: Date.now(),
        time: '66'
      }]
  }

  connect = async () => {
    const uri = await mongod.getConnectionString();

    /**
     * Connect to the in-memory database.
     */
    const mongooseOpts = {
     useNewUrlParser: true,
     useUnifiedTopology: true
  };

    await mongoose.connect(uri, mongooseOpts);
  };

  /**
   * Drop database, close the connection and stop mongod.
   */
  closeDatabase = async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongod.stop();
  };

  /**
   * Remove all the data for all db collections.
   */
  clearDatabase = async () => {
    const collections = mongoose.connection.collections;

    for (const key in collections) {
      const collection = collections[key];
      await collection.deleteMany();
    }
  };

  pushScoreBoardItemsToDb() {
    this.scoreBoardItems.forEach((scoreBoardItem) => {
      const newScoreBoardItem = new ScoreBoardItem(scoreBoardItem);
      newScoreBoardItem.save();
    })
  }
}


module.exports = InMemoryDb;
