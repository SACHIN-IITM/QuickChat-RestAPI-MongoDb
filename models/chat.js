const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    from : {
        type: String,
        reqired: true
    },
    to : {
        type: String,
        reqired: true
    },
    msg : {
        type: String,
        maxLength: 50
    },
    created_at : {
        type: Date
    }
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;