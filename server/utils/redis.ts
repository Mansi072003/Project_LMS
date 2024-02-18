import {Redis} from 'ioredis';  //
require('dotenv').config();

const redisClient = () => {
    if(process.env.REDIS_URL){
        console.log(`Redis Connected`);
        return process.env.REDIS_URL;
    }
    throw new Error('Redis Connection Failed');
}

const redisUrl = redisClient();
const redis = new Redis(redisUrl);
export { redis };