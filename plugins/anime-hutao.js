let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("hutao icon","hutao genshin impact","hutao wallpaper","hutao hd wallpaper").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
   }
    
handler.help = ['animeicon']
handler.tags = ['anime']
handler.command = /^(animeicon)$/i
handler.limit = false
