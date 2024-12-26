const { EmbedBuilder } = require("discord.js");

module.exports = {
    text: "{0}さんようこそ！",
    embed: new EmbedBuilder()
    .setAuthor({
        name: "愛の楽曲工房 PowerdedbyDiscordjs",
        iconURL: "https://cdn.discordapp.com/avatars/1009241132925984868/f9784d9164e63baaaa905a7e5f102021.webp?size=100",
    })
    .setTitle("愛の楽曲工房 Discordサーバーにようこそ！")
    .setDescription("Discordサーバーに参加してくれてありがとうございます。\nまず、以下の操作を行ってください。")
    .addFields(
        {
            name: "1.はじめに",
            value: "サーバーに参加していただきありがとうございます！\n どしどしリスナーさんと交流してください！",
            inline: false
        },
        {
            name: "2.自己紹介",
            value: "リスナーさん同士でたくさん交流していただきたいので <#1000586295514505356> で自己紹介をお願いします！",
            iniline: false
        },
        {
            name: "3.ロール付与",
            value: "セキュリティーのため参加された方にはロールを付与させて頂いております。\n <#1282974855314149377>にてロールを受け取ってください！ \n 2024/12/16 => 現在整備中です！！" ,
            inline: false
        }
    )
}