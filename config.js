//═══════[© 2022 𝐉𝐈𝐌𝐁𝐑𝐔 𝐯3.]════════\\

// 𝕄𝕀𝕂ℍ𝔸𝕀𝔼𝕃 𝕆𝔽𝔽𝕀ℂ𝔸𝕃

//═══════[modules]════════\\

const fs = require('fs')
const chalk = require('chalk')

//═══════[api website]════════\\
global.APIs = {
	zenz: 'https://zenzapi.xyz', //credit zenz, thank you so much bro <3
}
//═══════[api key of the website]════════\\
global.APIKeys = {
	'https://zenzapi.xyz': '805a6c3fa9', //thank you to zenz
}

//═══════[modification]════════\\
global.owner = ['8086418318'] //owner number, u can put multiple owner number, within quotations and seperated by comma.
global.pemilik = ['8086418318'] //another owner number
global.premium = ['8086418318'] //premium number
global.pengguna = 'DS MENTAL SIR' //username
global.botnma = 'DS MENTAL SIR' //bot name
global.ownernma = 'DS MENTAL SIR' //owner name
global.packname = 'Made' //sticker package name
global.author = 'By DS MENTAL' //sticker author name
global.sessionName = 'session' //session name
global.prefa = ['#','!','/',''] //prefix
global.sp = '⭔' //design
global.mess = {
    success: 'Done ✓',
    admin: 'This Feature Is Only For Admin!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'This Feature Is Only For Owner',
    group: 'Feature Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This feature in only for the bot number',
    wait: 'In process...',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity", //premium user limit
    free: 1000 //free user limit
}
global.thumb = fs.readFileSync('./Media/Jimbru.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
