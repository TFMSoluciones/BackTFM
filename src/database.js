import mongoose from 'mongoose';

require('dotenv').config();

const connectionString = process.env.mongoDbUri;

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to mongoDB')
})
    .catch((err) => {
        console.log('Not connected to mongoDB');
        console.log(err);
    });