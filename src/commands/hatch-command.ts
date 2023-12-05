import { CommandInteraction, SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("hatch")
  .setDescription("Hatches a dragon egg of your choice.")
  .addStringOption((option) =>
    option
      .setName("type")
      .setDescription("Select the dragon type you want to hatch!")
      .addChoices(
        { name: "Black", value: "black_dragon" },
        { name: "Red", value: "red_dragon" }
      )
  );

export async function execute(interaction: CommandInteraction) {
  return interaction.reply("Your dragon hatched!");
}
