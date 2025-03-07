const getAllBlogs = async () => {
    const result = await fetch("/api/blogs", { cache: "no-store" });
    return result.json();
};

export default getAllBlogs;
