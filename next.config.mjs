/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        HOST: process.env.HOST,
        PORT_SQL: process.env.PORT_SQL,
        USER: process.env.USER,
        PASSWORD: process.env.PASSWORD,
        DATABASE: process.env.DATABASE,
        JWT_SECRET: process.env.JWT_SECRET
    }
};

export default nextConfig;
