const { default: mongoose } = require("mongoose");

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        throw new Error("Error connecting to MongoDB");
    }
};

export default connect;
