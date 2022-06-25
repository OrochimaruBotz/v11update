let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("rimuru tempest","rimuru tempest icon","rimuru tempest wallpaper","rimuru tempest fanart","rimuru tempest manga").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
   }
    
handler.help = ['rimuru']
handler.tags = ['anime']
handler.command = /^(rimuru)$/i
handler.limit = false

module.exports = handler
