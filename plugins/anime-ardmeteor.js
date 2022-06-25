let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("ard meteor","ard meteor icon").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
   }
    
handler.help = ['ardmeteor']
handler.tags = ['anime']
handler.command = /^(ardmeteor)$/i
handler.limit = false

module.exports = handler
