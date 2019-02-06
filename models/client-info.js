 const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
    // client: {
        name: String,
        phone: String,
        email: String,
        address: String,
        social: String,

        // todo: {
        //     task: String,
        //     completed: Boolean,
        //     date: String
        // },

        // notes: {
        //     content: String,
        //     date: Date

        // },
    // }
}
);

module.exports = mongoose.model('Client', ClientSchema)