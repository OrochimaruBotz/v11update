let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://api.xteam.xyz/randomimage/bdsm?apikey=MIMINETBOT`
  conn.sendFile(m.chat, res, 'done', 'Done', m) 
}
handler.help = ['bdsm'].map(v => v + ' ')
handler.tags = ['nsfw']

handler.command = /^(bdsm)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler

