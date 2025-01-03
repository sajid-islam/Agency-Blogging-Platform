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
    image: {
        type: String,
        required: true,
    },
    author: [
        {
            name: {
                type: String,
                required: true,
            },
            photo: {
                type: String,
                required: true,
            },
            email: {
                type: String,
                required: true,
            },
            
        },
    ],
});

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

export default Blog;
