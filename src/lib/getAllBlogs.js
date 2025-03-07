const getAllBlogs = async () => {
    const baseURL =
        process.env.NODE_ENV === "production"
            ? "https://creativeink.vercel.app/api/blogs"
            : "http://localhost:3000/api/blogs";
    const result = await fetch(baseURL, { cache: "no-store" });
    return result.json();
};

export default getAllBlogs;
