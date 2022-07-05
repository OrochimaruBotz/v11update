let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("lucifer morningstar dc comics","lucifer morningstar dc comics","lucifer morningstar dc comics wallpaper","lucifer morningstar dc comics").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
   }
    
handler.help = ['lucifer']
handler.tags = ['anime']
handler.command = /^(lucifer)$/i
handler.limit = false

module.exports = handler
