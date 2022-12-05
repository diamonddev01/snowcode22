import {Client, ClientOptions, Collection, Message} from 'discord.js';
import {TOKEN} from './config';
class Snowconer extends Client {
	// TODO: Link the unknown type to be a COMMAND type
	// TODO: Add the database link
	// TODO: Add slash command initialisation
	// TODO: Add a sysLog
	public commands: Collection<string, unknown> = new Collection();

	constructor(options: ClientOptions) {
		super(options);
	}
}

const client = new Client({
	/*
		GUILDS - needs access to the guilds its operating in
		GUILD_MESSAGES - logic for adding snowcones when a message is sent
		MESSAGE_CONTENT - Will be removed, is only here for testing before slash commands
	*/
	intents: 33281
});

client.on('ready', () => {
	//
});

client.on('messageCreate', (message: Message) => {
	if(message.content.toLowerCase() == "ping") {
		message.channel.send({content: "pong"}).catch();
	}
});

client.login(TOKEN);
