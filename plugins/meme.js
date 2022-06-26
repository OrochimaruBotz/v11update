let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://api.zacros.my.id/randomimg/meme')
  conn.sendFile(m.chat, res, '', 'Done', m)
}
handler.help = ['meme']
handler.tags = ['internet']
handler.command = /^meme$/i
handler.limit = false

module.exports = handler
