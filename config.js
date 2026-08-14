require('dotenv').config();

const channel = process.env.CHANNEL;
const channelURL = process.env.CHANNEL_URL;

module.exports = {
    channel,
    channelURL
}