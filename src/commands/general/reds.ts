import { SlashCommandBuilder } from "discord.js"

module.exports = {
  data: new SlashCommandBuilder()
    .setName("reds")
    .setDescription("Aussy Loves the Reds!"),
  async execute(interaction) {
    await interaction.reply("@everyone Reds are the best!")
  },
}