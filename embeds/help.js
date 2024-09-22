const { EmbedBuilder } = require("discord.js");

module.exports = {
    data: new EmbedBuilder()
        .setAuthor({
            name: "愛の楽曲工房 Powered by Kenshiro",
            iconURL: "https://cdn.discordapp.com/avatars/1009241132925984868/f9784d9164e63baaaa905a7e5f102021.webp?size=100",
        })
        .setTitle("愛の楽曲工房Botの使い方")
        .setDescription("コマンド実行ありがとうございます！まだ少ない機能ですが、使ってみてください！")
        .setColor("#FFDC00")
        .addFields(
            {
                name: "``/help``",
                value: "このコマンドです！\nBotの使い方がわからなくなったらこのコマンドを実行してください！",
                inline: false
            },
            {
                name: "``/invite-link``",
                value: "このサーバーの招待リンクを送信します！\nこのサーバーでは原則招待リンクの発行ができません。\nもしリンクが必要な場合はこのコマンドから取得してください！",
                inline: false // 修正しました
            },
            {
                name: "開発者より",
                value: "初めてBotを制作しました！まだまだ機能は少ないですが、これから増やしてく予定ですので、ぜひご活用ください！\n欲しい機能等ありましたらメンションなどで書いてくださると嬉しいです！",
                inline: false
            }
        )
};
