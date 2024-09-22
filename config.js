/* eslint-disable no-inline-comments */
module.exports = {

	//	These values will be ignored if you have set the environment variables (must be in uppercase)

	prefix: ':', // required, command prefix
	botToken: 'OTM2NjgyODQ5MDY5ODQyNDMz.G5U-Sb.1nQX8UZMQVu79GYz9MPFMsupBq_ZwS7IM7r9DI', // required, https://discordjs.guide/preparations/setting-up-a-bot-application.html#your-token
	clientId: '936682849069842433', // optional, the bot's client ID, leave empty to disable slash commands
	geniusApiToken: '', // optional, but recommended for lyrics search - https://genius.com/api-clients

	// still under development, so you should leave these empty
	webplayer: '', // optional
	cors: '*', // optional - stored in an array for multiple socket connections in the future. Set to "*" to accept all
};

