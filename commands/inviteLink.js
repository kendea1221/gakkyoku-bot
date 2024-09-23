//. SlashCommand
const { SlashCommandBuilder, enableValidators } = require("discord.js");
const messageTextData = require("../data/message-text-data");

//. SlashCommand Setting
module.exports = {
    data: new SlashCommandBuilder()
        .setName(messageTextData.command.inviteLinkTitle)
        .setDescription(messageTextData.command.inviteLinkDescription),
    execute: async function(interaction) {
        await interaction.reply({"content":"**サーバーリンク**\nシェアお願いします！\nhttps://discord.gg/xvj26Cnu37/"});
    },
};