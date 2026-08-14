require('dotenv').config();

const { Telegraf, Markup } = require('telegraf');
const path = require('path');

const{ channel, channelURL} = require('./config');
const startHandler = require('./handlers/start');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(startHandler)

bot.action(
    'get_material',
    mateeialHandler(bot, channel, channelURL)
)

bot.launch();