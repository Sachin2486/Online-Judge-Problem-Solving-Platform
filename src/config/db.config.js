const mongoose = require('mongoose');
const { ATLAS_DB_URL, NODE_ENV } = require('./server.config');


async function connectToDB() {
    try {
        if(NODE_ENV == "development"){
        await mongoose.connect(ATLAS_DB_URL);
       }
    } catch (error) {
        console.log("Error while trying to connect with data base:");
        console.log(error); 
    }
}

module.exports = connectToDB;