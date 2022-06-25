let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("hutao fanart","hutao genshin impact","hutao wallpaper","hutao icon").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
   }
    
handler.help = ['hutao']
handler.tags = ['anime']
handler.command = /^(hutao)$/i
handler.limit = false

module.exports = handler
