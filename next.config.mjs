/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "i.postimg.cc",
            },
            {
                hostname: "miro.medium.com",
            },
            {
                hostname: "images.unsplash.com",
            },
            {
                hostname: "i.ibb.co",
            },
            {
                hostname: "img.clerk.com",
            },
            {
                hostname: "i.ibb.co.com",
            },
        ],
    },
};

export default nextConfig;
