const getMyBlogs = async () => {
    const result = await fetch("/api/my-blogs/sajidislam4026@gmail.com");
    return result.json();
};

export default getMyBlogs;
