const { Telegraf, Markup } = require('telegraf');
const path = require('path');

const bot = new Telegraf('8703259230:AAHme6bP1JsNFEXq1HW-bLksWwqSnkL3RQI');
const channel = '@nscapecode'
const channelURL = 'https://t.me/nscapecode'

bot.start((ctx) => {
    ctx.reply('Привет! Нажми на кнопку ниже:',
        Markup.inlineKeyboard([
            [Markup.button.callback('Получить материал', 'get_material')]
        ])
    );
});

bot.action('get_material', async (ctx) => {
    await ctx.answerCbQuery()

    try {
        const member = await bot.telegram.getChatMember(
            channel,
            ctx.from.id
        )
        
        const subscribes = member.status == 'member' || member.status == 'administrator' || member.status == 'creator'

        if (!subscribes) {
            await ctx.reply('Ты не подписан на канал! \nПопробуй еще раз' ,
                Markup.inlineKeyboard([
                    [
                        Markup.button.url(
                        'Подписаться на канал',
                        channelURL
                    )
                    ],
                    [
                        Markup.button.callback(
                            'Проверить подписку',
                            'get_material'
                        )
                    ]
                ])
            );

            return;
        }

        await ctx.reply('Подписка проверена!')

        await ctx.replyWithDocument({
                source: path.join(__dirname, 'material.jpg')
            });

    } catch (error) {
        console.error('ОШИБКА:', error);
        await ctx.reply('Произршла ошибка.')
        
    }
})

bot.launch();