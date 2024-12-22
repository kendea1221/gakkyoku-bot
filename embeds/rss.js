const { EmbedBuilder } = require("discord.js");

module.exports = {
    text: "**愛の楽曲工房が更新されました！！**",
    embed: (title, link, desc = "説明なし", summary = "サマリーなし", duration = "不明", image = null) => {
        return new EmbedBuilder()
            .setTitle("愛の楽曲工房")
            .setDescription(format.format("[{0}]({1})", title, link)) // 0=title, 1=link
            .setColor("#FFEF6C")
            .setThumbnail("https://cdn.discordapp.com/avatars/1009241132925984868/f9784d9164e63baaaa905a7e5f102021.webp?size=100")
            .addFields(
                {
                    name: "Description",
                    value: desc || "説明なし", // 2=description
                    inline: true
                },
                {
                    name: "Duration",
                    value: duration || "不明", // 3=duration
                    inline: true
                },
                {
                    name: "Links",
                    value: "[Spotify](https://spoti.fi/3eVtdg7)\n[GooglePodcast](https://bit.ly/3F2SOhH)\n[ApplePodcast](https://apple.co/3MQ19Hy)",
                    inline: true
                }
            )
            .setImage(image || "https://via.placeholder.com/150") // 4=thumbnail
            .setFooter({ text: "愛の楽曲工房" });
    }
};
