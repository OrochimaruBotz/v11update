let fs = require('fs')
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return
    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('Undangan untuk bergabung') || m.text.startsWith('Invitation to join') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
    let teks = `Invite Group
❏ › 3 ʜᴀʀɪ / ɢʀᴀᴛɪs
❏ › 7 ʜᴀʀɪ / Rp 5.000
❏ › 30 ʜᴀʀɪ / Rp 10.000

ᴊɪᴋᴀ ʙᴇʀᴍɪɴᴀᴛ ʜᴜʙᴜɴɢɪ: @${global.owner[0]} untuk order.
`
    this.reply(m.chat, teks, m)
    const data = global.owner.filter(([id, isCreator]) => id && isCreator)
    this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
    }
}

module.exports = handler
