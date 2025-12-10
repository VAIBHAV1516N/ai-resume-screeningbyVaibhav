const mongoose = require('mongoose');
require('dotenv').config(); // load .env

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI).then(() => {console.log('Database Connected Successfully');
    }).catch((err) => {console.log('Something Error', err);
});





















