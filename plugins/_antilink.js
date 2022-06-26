let handler = m => m

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
handler.before = async function (m, { user, isBotAdmin, isAdmin }) {
  if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true
  let chat = global.db.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink && isGroupLink) {
    await m.reply(`*「 ᴀɴᴛɪ ʟɪɴᴋ 」*\n\nᴛᴇʀᴅᴇᴛᴇᴋsɪ *${await conn.getName(m.sender)}* ᴋᴀᴍᴜ ᴍᴇɴɢɪʀɪᴍ ʟɪɴᴋ ɢʀᴏᴜᴘ ʟᴀɪɴ!\n\nᴋᴀᴍᴜ ᴀᴋᴀɴ sᴇɢᴇʀᴀ ᴅɪᴋɪᴄᴋ!`)
    if (isAdmin) return m.reply('*ᴀᴋsᴇs ᴅɪᴛᴏʟᴀᴋ, ᴋᴀʀᴇɴᴀ ᴋᴀᴍᴜ ᴀᴅᴀʟᴀʜ ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ ɪɴɪ*')
    if (!isBotAdmin) return m.reply('*ᴅᴇɴɪᴇᴅ, ʙᴏᴛ ʙᴜᴋᴀɴ ᴀᴅᴍɪɴ*')
    let linkGC = ('https://chat.whatsapp.com/' + await conn.groupInviteCode(m.chat))
    let isLinkconnGc = new RegExp(linkGC, 'i')
    let isgclink = isLinkconnGc.test(m.text)
    if (isgclink) return m.reply('*「 ᴀɴᴛɪ ʟɪɴᴋ 」*\n\nʙᴏᴛ ᴛɪᴅᴀᴋ ᴊᴀᴅɪ ᴋɪᴄᴋ ᴋᴀᴍᴜ.\nᴋᴀʀᴇɴᴀ ᴋᴀᴍᴜ ᴍᴇɴɢɪʀɪᴍ ʟɪɴᴋ ɢʀᴏᴜᴘ ɪɴɪ')
    await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
  }
  return true
}

module.exports = handler


