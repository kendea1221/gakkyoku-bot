const { EmbedBuilder } = require("discord.js");

module.exports = {
    text: "**愛の楽曲工房が更新されました！！**",
    embed: new EmbedBuilder()
    .setTitle("愛の楽曲工房")
    .setDescription("[{0}]({1})") //0=title,1=url
    .setColor("#FFEF6C")
    .setThumbnail("https://cdn.discordapp.com/avatars/1009241132925984868/f9784d9164e63baaaa905a7e5f102021.webp?size=100")
    .addFields(
        {
            name: "Description",
            value: "{2}",//2=description
            inline: true  
        },
        {
            name: "Duration",
            value: "{3}",//3=duration
            inline: true
        },
        {
            name: "Links",
            value: "[Spotify](https://spoti.fi/3eVtdg7)\n[GooglePodcast](https://bit.ly/3F2SOhH)\n[ApplePodcast](https://apple.co/3MQ19Hy)",
            inline: true
        }
    )
    .setImage("{4}")//4=thumnail
    .setFooter("愛の楽曲工房")
}