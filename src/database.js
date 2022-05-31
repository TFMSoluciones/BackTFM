import mongoose from 'mongoose';
import colors from 'colors';

require('dotenv').config();

const connectionString = process.env.mongoDbUri;

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(colors.bold.green('Connected to mongoDB'))
})
    .catch((err) => {
        console.log(colors.bold.red('Not connected to mongoDB'));
        console.log(err);
    });