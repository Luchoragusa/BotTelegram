const Telegraf = require("telegraf");

const bot = new Telegraf("5785597594:AAEq4J8tr5w86sP0lB5Lo7RmjUonneokLmg");

bot.use((ctx, next) => {
  ctx.state.users = 75;
  next(ctx);
});

bot.start((ctx) => {
  console.log("\n🤖 ¡Bot iniciado correctamente! 🚀\n\n");

  console.log(`  ============== 📩 Información del Mensaje ==============
🙋‍♂️  Enviado por: ${ctx.from.first_name || ""} ${ctx.from.last_name || ""}
👤  ID de Usuario: ${ctx.from.id}
📨  Mensaje: "${ctx.message.text}"
📩  Tipo de Mensaje: [${ctx.updateSubTypes[0]}]
=============================================================\n`);

  bot.telegram.sendMessage(ctx.chat.id, "**¡Hola mundo!**", {
    parse_mode: "Markdown",
    disable_notification: true,
  });
});

bot.settings((ctx) => ctx.reply("Comando de configuración"));

bot.command(["mytest", "Mytest", "test"], (ctx) => {
  ctx.reply("Mi comando personalizado");
});

bot.command(["sendMD"], (ctx) => {
  ctx.reply("Mensaje enviado al MD");
  const telegramId = "1642350769";
  bot.telegram.sendMessage(telegramId, "¡Hola!");
});

bot.hears("computer", (ctx) => {
  ctx.reply("¡Hey, estoy vendiendo una computadora!");
});

bot.mention("BotFather", (ctx) => {
  ctx.reply("Has mencionado a alguien");
});

bot.phone("+1 730 263-4233", (ctx) => {
  ctx.reply("Esto es un número de teléfono");
});

bot.hashtag("coding", (ctx) => {
  ctx.reply("¡Hashtag!");
});

bot.launch();
