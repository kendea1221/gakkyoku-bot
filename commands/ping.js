//. SlashCommand
const { SlashCommandBuilder } = require("discord.js");
const messageTextData = require("../data/message-text-data");
const { embed } = require("../embeds/welcome-embeds.js");

//. SlashCommand Setting
module.exports = {
    data: new SlashCommandBuilder()
        .setName(messageTextData.command.pingTitle)
        .setDescription(messageTextData.command.pingDescription),
    execute: async function(interaction) {
        await interaction.reply({content:"Pong!!",ephemeral: true});
    },
};