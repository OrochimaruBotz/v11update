let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("kotori itsuka","itsuka kotori","kotori date a live","itsuka kotori wallpaper","kotori itsuka wallpaper").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
   }
    
handler.help = ['kotori']
handler.tags = ['internet']
handler.command = /^(kotori)$/i
handler.limit = false

module.exports = handler
