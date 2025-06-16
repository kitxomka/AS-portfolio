// const isGithubPages = process.env.GITHUB_PAGES === 'true';

// const nextConfig = {
//     output: 'export',
//     basePath: isGithubPages ? '/portfolio_next_styled' : '',
//     assetPrefix: isGithubPages ? '/portfolio_next_styled/' : '',
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
    output: 'export', // tells Next to prepare for static export
    basePath: isGithubPages ? '/portfolio_next_styled' : '',
    assetPrefix: isGithubPages ? '/portfolio_next_styled/' : '',
    compiler: {
        styledComponents: true, // works if .babelrc is removed!
    },
};

export default nextConfig;

