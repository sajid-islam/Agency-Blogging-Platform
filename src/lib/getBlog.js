const getBlog = async (id) => {
    const baseURL =
        process.env.NODE_ENV === "production"
            ? `https://creativeink.vercel.app/api/blogs/${id}`
            : `http://localhost:3000/api/blogs/${id}`;
    const result = await fetch(baseURL);
    return result.json();
};

export default getBlog;
