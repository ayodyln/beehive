import dotenv from "dotenv"
import fs from "node:fs"
import path from "node:path"

// Require the necessary discord.js classes
import { Client, Collection, Events, GatewayIntentBits } from "discord.js"

//! Configure environment variables
dotenv.config()

// Create a new client instance
const client: any = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.DirectMessages,
  ],
})

client.on("ready", () => {
  console.log("ready")
})

// create a bot interaction that is done via a slash command that outputs a message saying hello world to the discord server
client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return

  if (interaction.commandName === "ping") {
    await interaction.reply("Pong!")
  }
})

// Log in to Discord with your client's token
client.login(process.env.bot)
