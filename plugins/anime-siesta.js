let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("siesta icon","siesta tantei wa mou","siesta tantei wa mou sindeiru","siesta wallpaper","siesta cute icon","siesta tantei wa mou sindeiru wallpaper","siesta hd wallpaper","siesta anime icon").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
   }
    
handler.help = ['siesta']
handler.tags = ['anime']
handler.command = /^(siesta)$/i
handler.limit = false

module.exports = handlerscrap
