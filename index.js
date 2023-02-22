const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
const authRoutes = require('./routes/authRoutes');
const passportConfig = require('./services/passport');

mongoose.set('strictQuery', false);
mongoose.connect(keys.mongoURI)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err))

const app = express();

authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(5000);


