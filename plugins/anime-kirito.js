let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("kirito icon","kirigaya kazuto","kirito icon dark","kirigaya kazuto wallpaper","kirito wallpaper","kirito icon aesthetic").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
   }
    
handler.help = ['kirito']
handler.tags = ['anime']
handler.command = /^(kirito)$/i
handler.limit = false

module.exports = handler
