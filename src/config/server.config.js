const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT: process.env.PORT || 3000,
    ATLAS_DB_URL: process.env.ATLAS_DB_URL || 'mongodb+srv://tiwari123sachin2:8hUHxNx3q0SFZT6m@cluster0.fgsy8pr.mongodb.net/',
    LOG_DB_URL : process.env.LOG_DB_URL || 'mongodb+srv://tiwari123sachin2:HoxyS6A2YATqAIxu@cluster0.w2uoai4.mongodb.net/',
    NODE_ENV: process.env.NODE_ENV || "development"
}
