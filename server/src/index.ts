import Config from './config.js'
import HttpApi from './api/http.js'
import Bot from './api/bot.js'


const bot = new Bot(Config.botToken, Config.isTestEnvironment)
/**
 * Listen for messages from Telegram
*/
const botApi = bot.run();

const api = new HttpApi(Config, botApi)

/**
 * Listen for HTTP requests
 */
api.run()