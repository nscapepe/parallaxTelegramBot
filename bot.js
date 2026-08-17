require('dotenv').config();

const { Telegraf } = require('telegraf');

const { startHandler } = require('./handlers/start');

const {
    materialHandler,
    checkSubscriptionHandler,
    materialsMenuHandler,
    mainMenuHandler,
    musicMainMenuHandler,
} = require('./handlers/material');

const bot = new Telegraf(
    process.env.BOT_TOKEN
);

bot.start(startHandler);

bot.action(
    'materials',
    materialsMenuHandler()
);

bot.action(
    /^material:(.+)$/,
    materialHandler(bot)
);

bot.action(
    /^check:(.+)$/,
    checkSubscriptionHandler(bot)
);

bot.action(
    'main_menu',
    mainMenuHandler()
);

bot.action(
    'music_main_menu',
    musicMainMenuHandler()
);

bot.launch();

console.log('Бот запущен');