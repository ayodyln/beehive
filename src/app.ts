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
    GatewayIntentBits.MessageContent,
  ],
})

client.commands = new Collection()

const commandsPath = path.join(__dirname, "commands")
const commandFiles = fs
  .readdirSync(commandsPath)
  .filter((file) => file.endsWith(".ts"))

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file)
  const command = require(filePath)
  // Set a new item in the Collection with the key as the command name and the value as the exported module
  if ("data" in command && "execute" in command) {
    client.commands.set(command.data.name, command)
  } else {
    console.log(
      `[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`
    )
  }
}

client.on("ready", () => {
  console.log("Hello, I'm BeeHive! Ready to GO! :D")
})

// create a bot interaction that is done via a slash command that outputs a message saying hello world to the discord server
client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return

  if (interaction.commandName === "ping") {
    interaction.reply("Pong!")
  }
})

// client.on("messageCreate", async (message) => {
//   if (message.content === "ping") {
//     await message.reply("pong")
//   }
// })

// Log in to Discord with your client's token
client.login(process.env.bot)
