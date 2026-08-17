const{ Markup } = require('telegraf')
const path = require('path')

const CONTENT = require('../content')

function getMainMenu(){
    return Markup.inlineKeyboard([
        [
            Markup.button.callback(
                'Забрать материалы',
                'materials'
            )
        ],
        [
            Markup.button.url(
                'Telegram',
                process.env.CHANNEL_URL
            ),
            Markup.button.url(
                'Сотрудничество',
                process.env.COOPERATION_URL
            )
        ]
    ])
}

async function startHandler(ctx) {
    await ctx.replyWithPhoto(
        {
        source: path.join(__dirname,'..', CONTENT.cover)
        },
        {
            caption: CONTENT.description,
            ...getMainMenu(),
        }
    )
}

module.exports = {
    startHandler,
    getMainMenu
}