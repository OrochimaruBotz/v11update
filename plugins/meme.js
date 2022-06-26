let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://api.zacros.my.id/randomimg/meme')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'Done', m)
}
handler.help = ['meme']
handler.tags = ['internet']
handler.command = /^meme$/i
handler.limit = false

module.exports = handler
