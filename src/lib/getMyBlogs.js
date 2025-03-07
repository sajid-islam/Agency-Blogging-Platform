const getMyBlogs = async () => {
    const baseURL =
        process.env.NODE_ENV === "production"
            ? "https://creativeink.vercel.app/api/blogs/sajidislam4026@gmail.com"
            : "http://localhost:3000/api/blogs/sajidislam4026@gmail.com";
    const result = await fetch("/api/my-blogs/sajidislam4026@gmail.com");
    return result.json();
};

export default getMyBlogs;
