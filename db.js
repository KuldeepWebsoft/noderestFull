const mongoose = require('mongoose');

const MONGO_USERNAME = 'kuldeep';
const MONGO_PASSWORD = '2007Yatish1993';
const MONGO_HOSTNAME = '143.110.187.159';
const MONGO_PORT = '27017';
const MONGO_DB = 'BUILDFROMNODE';

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

mongoose.connect(url, {useNewUrlParser: true},).then(()=>{
    console.log('Connect to database!');
}).catch(e => {
    //handleError(e)
    console.log(e);
console.log(' DB Connection Failed');

});
