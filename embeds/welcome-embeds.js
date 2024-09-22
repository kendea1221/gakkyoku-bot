const { EmbedBuilder } = require("discord.js");

module.exports = {
    text: "{0}さんようこそ！",
    embed: new EmbedBuilder()
    .setAuthor({
        name: "愛の楽曲工房 PowerdedbyKenshiro",
        iconURL: "https://cdn.discordapp.com/icons/1240929590545747989/b5549872d8a70e18ddad3a17390a7598.webp?size=96",
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
            value: "セキュリティーのため参加された方にはロールを付与させて頂いております。\n <#1282974855314149377>にてロールを受け取ってください！" ,
            inline: false
        }
    )
}