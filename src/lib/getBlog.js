const getBlog = async (id) => {
    const result = await fetch(`/api/blogs/${id}`);
    return result.json();
};

export default getBlog;
