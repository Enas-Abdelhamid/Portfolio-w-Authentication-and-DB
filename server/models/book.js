/* book.js file under Models - Enas Abdelhamid - 301234410 - March 04, 2022 */
let mongoose = require('mongoose');

// create a model class
let bookModel = mongoose.Schema({
    contactname: String,
    contactnumber: Number,
    emailaddress: String    
},
{
    collection: "businesscontacts"
});

module.exports = mongoose.model('Book', bookModel);