const { REST, Routes } = require('discord.js');
const ping = require("./commands/ping.js");
const inviteLink = require("./commands/inviteLink.js")
const messageTextData = require("./data/message-text-data.js");
require('dotenv').config();

//. command
const commands = [
  ping.data.toJSON(),
  inviteLink.data.toJSON(),
  help.data.toJSON()
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
  try {
    await rest.put(
      Routes.applicationGuildCommands(process.env.APPLICATION_ID, process.env.GUILD_ID),
      { body: commands },
	);
    console.log(messageTextData.general.commandRegSuc);
  } catch (error) {
    console.error(messageTextData.general.commandRegFail, error);
  }
})();