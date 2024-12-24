const { default: mongoose } = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    authorImage: {
        type: String,
        required: true,
    },
    authorName:{
        type: String,
        required: true,
    },
    coverImg: {
        type: String,
        required: true,
    },
});

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
