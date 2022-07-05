let handler = m => m

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
handler.before = async function (m, { user, isBotAdmin, isAdmin }) {
  if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true
  let chat = global.db.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink && isGroupLink) {
    await m.reply(`*「 Anti Link 」*\n\nTerdeteksi *${await conn.getName(m.sender)}* Mengirim Link Grup Lain!\n\nKamu Akan Segera Dikick!`)
    if (isAdmin) return m.reply('*Denied, Karena kamu *Admin Grup* ini*')
    if (!isBotAdmin) return m.reply('*Denied, Bot Bukan Admin*')
    let linkGC = ('https://chat.whatsapp.com/' + await conn.groupInviteCode(m.chat))
    let isLinkconnGc = new RegExp(linkGC, 'i')
    let isgclink = isLinkconnGc.test(m.text)
    if (isgclink) return m.reply('*「 Anti Link 」*\n\nBot Tidak Jadi Kick Kamu.\nKarena Kamu Mengirim Link Grup Ini')
    await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
  }
  return true
}

module.exports = handler


