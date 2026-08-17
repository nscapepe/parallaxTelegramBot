require('dotenv').config();

const CHANNEL = process.env.CHANNEL;
const CHANNEL_URL = process.env.CHANNEL_URL;

module.exports = {
    CHANNEL,
    CHANNEL_URL
}