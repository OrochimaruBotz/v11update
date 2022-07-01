let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://bx-hunter.herokuapp.com/api/randomvidhentai?apikey=oQpiCHRf')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.video_1) throw 'Error!'
  conn.sendFile(m.chat, json.video_1, '', 'Nih', m)
}
handler.help = ['vidhentai']
handler.tags = ['nsfw']
handler.command = /^(vidhentai)$/i
handler.premium = true
handler.limit = true

module.exports = handler
