/** @type {import('next').NextConfig} */
const production = true;

const nextConfig = {
    output: 'export',
    env: {
        PUBLIC: production ? '/prueba-tecnica' : ''
    }
};

module.exports = nextConfig;

