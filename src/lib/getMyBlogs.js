const getMyBlogs = async () => {
    const result = await fetch("http://localhost:3000/api/my-blogs/sajidislam4026@gmail.com");
    return result.json();
};

export default getMyBlogs;