//. SlashCommand
const { SlashCommandBuilder, enableValidators } = require("discord.js");
const messageTextData = require("../data/message-text-data");
const helpEmbed = require("../embeds/help.js")

//. SlashCommand Setting
module.exports = {
    data: new SlashCommandBuilder()
        .setName(messageTextData.command.helpTitle)
        .setDescription(messageTextData.command.helpDescription),
    execute: async function(interaction) {
        await interaction.reply({
            embeds: [helpEmbed.data],
            ephemeral: true
        });
    },
};