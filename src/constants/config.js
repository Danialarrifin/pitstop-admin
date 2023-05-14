// IMPORTANT:
// Change this mode depends on environment
const mode = 'prod'; // dev | prod | local

const configuration = {
    local: {
        apiUrl: 'http://localhost:3000/api/',
    },
    dev: {
        apiUrl: 'http://localhost:3001/api/', // dev env using local endpoint
    },
    prod: {
        apiUrl: 'https://api.localhost.com/api/',
    }
};

const config = configuration[mode];

const devMode = (mode != 'prod') ? true :  false;

const IS_PROD = process.env.NODE_ENV === 'production'

const CACHE_REVALIDATION = 60 // 1 minute

export default {
    config,
    devMode,
    IS_PROD,
    CACHE_REVALIDATION
};