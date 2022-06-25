let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("anime icon","animeicon","anime manga icon","animeicon manga","animemanga icon","manga icon","mangaicon").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
   }
    
handler.help = ['animeicon']
handler.tags = ['anime']
handler.command = /^(animeicon)$/i
handler.limit = false

module.exports = handlerscrap
