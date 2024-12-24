const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    clerkId: {
        type: String,
        required: true,
        unique: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    photo: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
});

const User = mongoose.model("User", userSchema);

export default User;
