/** @type {import('next').NextConfig} */
const nextConfig = {
    webpackDevMiddleware: (config) => {
        config.watchOptions = {
            poll: 1000,
            aggregateTimeout: 300,
        }
        return config
    },
    experimental: {
        appDir: true,
    },
    images: {
        domains: ['www.uc.no'],
    },
    publicRuntimeConfig: {
        port: 3002,
    },
}

module.exports = nextConfig
