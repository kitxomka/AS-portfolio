/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/portfolio_next_styled',
    assetPrefix: '/portfolio_next_styled',
    compiler: {
        styledComponents: true,
    },
};

export default nextConfig;
