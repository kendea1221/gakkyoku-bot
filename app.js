const { Client, Events, GatewayIntentBits, ActivityType } = require("discord.js");
//. data
const messageTextData = require("./data/message-text-data.js");
//. embeds
const welcomeEmbed = require("./embeds/welcome-embeds.js");
//. commands
const ping = require("./commands/ping.js");

const format = require("./format.js");

require("dotenv").config();
const client = new Client({ intents:
    [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildModeration,
        GatewayIntentBits.GuildEmojisAndStickers,
        GatewayIntentBits.GuildIntegrations,
        GatewayIntentBits.GuildWebhooks,
        GatewayIntentBits.GuildInvites,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.DirectMessageReactions,
        GatewayIntentBits.DirectMessageTyping,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildScheduledEvents,
        GatewayIntentBits.AutoModerationConfiguration,
        GatewayIntentBits.AutoModerationExecution,
    ]
});

//. Botが起動したときのlog
client.once(Events.ClientReady, c => {
    //. ステメの設定
    client.user.setActivity({
      name: format.format(messageTextData.general.statusMessage, "愛の楽曲工房"),
      type: ActivityType.Listening
    });
    
    console.log(format.format(messageTextData.general.boot, c.user.tag));
    console.log(format.format(messageTextData.general.statusMessage, "愛の楽曲工房"));
    client.channels.cache.get(process.env.BOT_LOG_CHANNNEL_ID).send({content: format.format(messageTextData.general.bootMessage, "<@965875014232588318> \n ⚡️ 愛の楽曲工房BOT")});  
});

//. WelcomeMessage
client.on(Events.GuildMemberAdd, member => {
    if (member.guild.id !== process.env.GUILD_ID) return;
    member.guild.channels.cache.get(process.env.WELCOME_CHANNNEL_ID).send({content: format.format(welcomeEmbed.text, member.user), embeds: [welcomeEmbed.embed]});
});

//. SlashCommand res setting
client.on(Events.InteractionCreate, async interaction => {
    //. 登録されていないコマンドのときはreturn
    if (!interaction.isChatInputCommand()) return;
    //. Ping Command
    if (interaction.commandName === ping.data.name) {
        try {
            await ping.execute(interaction);
        } catch (error) {
            console.error(error);
            if (interaction.replied || interaction.deferred){
                await interaction.followUp({content: messageTextData.command.commandFail, ephemeral:true});
            } else {
                await interaction.reply({content: messageTextData.command.commandFail, ephemeral:true});
            }
        }
    } else {
        console.error(messageTextData.general.notSupport);
    }
});

client.login(process.env.TOKEN);