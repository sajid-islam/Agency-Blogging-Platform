const getBlog = async (id) => {
    const result = await fetch(`http://localhost:3000/api/blogs/${id}`);
    return result.json();
};

export default getBlog;
