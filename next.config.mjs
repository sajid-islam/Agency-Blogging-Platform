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
        ],
    },
};

export default nextConfig;
