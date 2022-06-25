let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("anos manga","anos voldigoad","anos icon","anos voldigoad wallpaper","anos manga","anos voldigoad manga").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
   }
    
handler.help = ['anos']
handler.tags = ['anime']
handler.command = /^(anos)$/i
handler.limit = false

module.exports = handler
