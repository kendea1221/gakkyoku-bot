const { EmbedBuilder } = require("discord.js");

module.exports = {
    data: new EmbedBuilder()
        .setAuthor({
            name: "愛の楽曲工房 Powered by Kenshiro",
            iconURL: "https://cdn.discordapp.com/icons/1240929590545747989/b5549872d8a70e18ddad3a17390a7598.webp?size=96",
        })
        .setTitle("愛の楽曲工房Botの使い方")
        .setDescription("コマンド実行ありがとうございます！まだ少ない機能ですが、使ってみてください！")
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
