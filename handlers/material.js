const{ Markup } = require('telegraf')
const path = require('path')

function materialHandler(bot, channel, channelURL) {
return ctx.answerCbQuery()

    try {
        const member = await bot.telegram.getChatMember(
                channel,
                ctx.from.id
            );

            const subscribed = member.status === 'member' || member.status === 'administrator' || member.status === 'creator';

        if (!subscribed) {
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

        await ctx.replyWithPhoto({
                source: path.join(__dirname, '..', 'material.jpg')
            });

    } catch (error) {
        console.error('ОШИБКА:', error);
        await ctx.reply('Не удалось проверить подписку.')
        
    }
}