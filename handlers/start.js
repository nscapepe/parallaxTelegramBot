const{ Markup } = require('telegraf')
const path = require('path')

function startHandler(ctx) {
    return ctx.replyWithPhoto(
        {
        source: path.join(__dirname,'..', 'zastavka.jpg')
        },
        {
            caption:
            'Parallax qq \n\n Динислам лох :)',
            ...Markup.inlineKeyboard([
                [
                    Markup.button.callback(
                        'Получить материал',
                        'get_material'
                    )
                ]
            ])
        }
    )
}

module.exports = startHandler