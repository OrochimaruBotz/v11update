let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("anos voldigoad","anos voldigoad","anos voldigoad icon").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
   }
    
handler.help = ['anos']
handler.tags = ['anime']
handler.command = /^(anos)$/i
handler.limit = false

module.exports = handler
