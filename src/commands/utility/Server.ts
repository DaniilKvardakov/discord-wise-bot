import {SlashCommandBuilder} from "discord.js";


export default {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('Provides information about the server!'),
    async execute(interaction: any) {
        await interaction.reply(`This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`);
    },
};