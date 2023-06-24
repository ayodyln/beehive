import { SlashCommandBuilder, AttachmentBuilder } from "discord.js"

module.exports = {
  data: new SlashCommandBuilder()
    .setName("frog")
    .setDescription("Replies with Pong!"),
  async execute(interaction) {
    const img = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSueRQ64F9eF-cgq-1yeHzWMCWQjB-_lwFAhNH5sBv5&s`
    const attachment = new AttachmentBuilder(img, { name: "frog.png" })
    await interaction.reply({ files: [attachment] })
    await interaction.followUp("Frog!")
  },
}
