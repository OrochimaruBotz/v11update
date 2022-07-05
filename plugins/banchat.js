let handler = async (m, { conn, participants }) => {
  // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.db.data.chats[m.chat].isBanned = true
    m.reply('Done, Sekarang bot telah dimute.')
  // } else m.reply('Ada nomor host disini...')
}
handler.help = ['banchat', 'mute']
handler.tags = ['owner']
handler.command = /^banchat|mute|bnc$/i
handler.owner = true

module.exports = handler
