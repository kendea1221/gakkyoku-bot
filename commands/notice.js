const { SlashCommandBuilder, Events } = require('discord.js');
const messageTextData = require("../data/message-text-data.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName(messageTextData.command.noticeTitle)
        .setDescription(messageTextData.command.noticeDescription)
        .addStringOption(option =>
            option.setName('title')
                .setDescription(messageTextData.string.noticeTitle)
                .setRequired(true)
        )
        .addStringOption(option =>
            option.setName('content')
                .setDescription(messageTextData.string.noticeDescription)
                .setRequired(true)
        )
        .addRoleOption(option =>
            option.setName('role')
                .setDescription(messageTextData.string.noticeRole)
                .setRequired(true)
        ) // setRequired(true) の位置を修正
        .addChannelOption(option =>
            option.setName('channel')
                .setDescription(messageTextData.string.noticeChannnel)
                .setRequired(true)
        ), // setRequired(true) の位置を修正

    async execute(interaction, client) {
        // adminのみ実行可能にする
        const requiredRoleId = '1095654608212336742'; // 例: '123456789012345678'

        // コマンド実行者のロールチェック
        const memberRoles = interaction.member.roles.cache;
        if (!memberRoles.has(requiredRoleId)) {
            return interaction.reply({
                content: messageTextData.command.commandCannnotExecute,
                ephemeral: true,
            });
        }

        // 引数からデータを取得
        const title = interaction.options.getString('title');
        const content = interaction.options.getString('content');
        const roleId = interaction.options.getRole('role').id;
        const channelId = interaction.options.getChannel('channel').id;

        // 応答を送信
        await interaction.reply({ content: messageTextData.string.noticeSuccess, ephemeral: true });

        // チャンネルを非同期に取得
        try {
            const channel = await interaction.guild.channels.fetch(channelId);
            if (!channel) {
                return interaction.followUp({ content: messageTextData.string.noticeCannnotFindChannel, ephemeral: true });
            }

            // メッセージ送信
            const username = interaction.user.username; // interaction.user.username を使用
            await channel.send({
                content: `<@&${roleId}> \n ${username}からのお知らせです！⇩⇩  \n \n **【${title}】** \n ${content}`
            });
        } catch (error) {
            console.error(error);
            return interaction.followUp({ content: messageTextData.string.noticeCannnotFindChannel, ephemeral: true });
        }
    },
};
