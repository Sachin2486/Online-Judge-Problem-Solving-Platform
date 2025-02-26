const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/server.config');
const apiRouter = require('./routes');
const errorHandler = require('./utils/errorHandler');
const connectToDB = require('./config/db.config');
const Problem = require('./models/problem.model');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true }));
app.use(bodyParser.text());

app.use('/api',apiRouter);

app.get('/ping',(req,res) => {
    return res.json({message: 'Problem Service is alive'});
});

app.use(errorHandler); // last middleware if any error comes up

app.listen(PORT, async() => {
    console.log(`Server started at PORT: ${PORT}`);
    await connectToDB();
    console.log("successfully connected to data base");
});