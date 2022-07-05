let handler = async (m, { conn }) => {
  global.db.data.chats[m.chat].isBanned = false
  m.reply('Done, Sekarang bot dapat digunakan digrup ini.')
}
handler.help = ['unbanchat', 'unmute']
handler.tags = ['owner']
handler.command = /^unbanchat|unmute|bannd$/i
handler.owner,handler.mods = true

module.exports = handler
