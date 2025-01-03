const getAllBlogs = async () => {
    const result = await fetch("http://localhost:3000/api/blogs");
    return result.json();
};

export default getAllBlogs;
