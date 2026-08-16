require('dotenv').config();

const { Telegraf } = require('telegraf');

const startHandler = require('./handlers/start');
const materialHandler = require('./handlers/material');

const bot = new Telegraf(process.env.BOT_TOKEN);

const CHANNEL = process.env.CHANNEL;
const CHANNEL_URL = process.env.CHANNEL_URL;

bot.start(startHandler)

bot.action(
    'get_material',
    materialHandler(bot, CHANNEL, CHANNEL_URL)
)

bot.launch();