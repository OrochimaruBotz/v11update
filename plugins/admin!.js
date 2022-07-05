let handler = async (m, { conn, isAdmin }) => {
  if (m.fromMe) throw 'ᴊᴀᴅɪᴋᴀɴ ʙᴏᴛ sᴇʙᴀɢᴀɪ ᴀᴅᴍɪɴ!'
  if (isAdmin) throw 'ᴅɪᴀ ᴜᴅᴀʜ ᴀᴅᴍɪɴ'
  await conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote')
}
handler.command = /^admin!$/i
handler.rowner = true
handler.botAdmin = true
module.exports = handler
