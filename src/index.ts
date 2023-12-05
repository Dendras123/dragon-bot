import { config } from "./config";
import { Client } from "discord.js";
import { registerCommands } from "./register-commands";
import { commands } from "./commands";

const client = new Client({
  intents: ["Guilds", "GuildMessages", "MessageContent"],
});

client.on("ready", (c) => {
  console.log(c.user.tag + " is online!");
  registerCommands(config.GUILD_ID);
});

// registers commands when the bot is invited to a server
// client.once("guildCreate", async (guild) => {
//   await registerCommands({ guildId: guild.id });
// });

// execute slash commands
client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) {
    return;
  }

  const { commandName } = interaction;
  if (commands[commandName as keyof typeof commands]) {
    commands[commandName as keyof typeof commands].execute(interaction);
  }
});

client.on("messageCreate", (m) => {
  if (m.author.bot) {
    return;
  }

  console.log(m.content);
});

client.login(config.DISCORD_TOKEN);
