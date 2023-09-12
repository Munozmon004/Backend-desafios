import twilio from "twilio";
import config from '../config/environment.config.js';
import logger from "./logger.util.js";

const ACCOUNT_SID = config.ACCOUNT_SID;
const AUTH_TOKEN = config.AUTH_TOKEN;
const client = twilio(ACCOUNT_SID, AUTH_TOKEN);

try {
	await client.messages.create({
		body: `This is a test message.`,
		from: "+18552982998",
		to: "+524651621738"
	});
} catch (err) {
	logger.error(`Catch error: ${err}`);
}