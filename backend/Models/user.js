const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "User must type name"],
        unique: true,
    },
    token: {
        type: String,
        required: true,
    },
    online: {
        type: Boolean,
        default: false,
    },
});
const User = mongoose.model("User", userSchema);

module.exports = { User }; // 객체로 내보내기