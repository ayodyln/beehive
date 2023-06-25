import { SlashCommandBuilder, AttachmentBuilder } from "discord.js"
import fs from "fs"

module.exports = {
  data: new SlashCommandBuilder()
    .setName("aussy")
    .setDescription("Aussy is love, Aussy is life"),
  async execute(interaction) {
    const aussy = fs.readFileSync("./src/content/aussy.jpeg")
    const attachment = new AttachmentBuilder(aussy)
    await interaction.reply({ files: [attachment] })
  },
}
