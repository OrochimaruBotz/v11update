let moment = require('moment-timezone')
let handler = m => m

handler.before = async function (m) {

    if (m.chat.endsWith('broadcast')) return
    if (m.fromMe) return
    if (m.isGroup) return
   // if (db.data.settings.groupOnly) return
    let user = global.db.data.users[m.sender]
    let { banned } = db.data.users[m.chat]
    let username = conn.getName(m.sender) 
    if (new Date - user.pc < 86400000) return // setiap 24 jam sekali
 //   await conn.modifyChat(m.chat, 'mute', -Math.floor(new Date / 1e3) * 1e3 - 1e3).catch(console.log)
    await this.sendButton(m.chat, `
Hai ${ucapan()} *${username.replace(/@.+/, '')}* 👋

${banned ? `ᴋᴀᴍᴜ ᴛᴇʟᴀʜ *ᴅɪʙᴀɴɴᴇᴅ* 😔\nʜᴜʙᴜɴɢɪ: wa.me/${owner[0]}` : 'ᴀᴅᴀ ʏᴀɴɢ ʙɪsᴀ sᴀʏᴀ ʙᴀɴᴛᴜ?'}
`.trim(), wm, null, [['ᴍᴇɴᴜ', '/menu']], m)
    user.pc = new Date * 1
}

module.exports = handler
function ucapan() {
        const hour_now = moment.tz('Asia/Jakarta').format('HH')
        var ucapanWaktu = 'ᴘᴀɢɪ 🏙️'
        if (hour_now >= '03' && hour_now <= '10') {
          ucapanWaktu = 'ᴘᴀɢɪ 🏙️'
        } else if (hour_now >= '10' && hour_now <= '15') {
          ucapanWaktu = 'sɪᴀɴɢ 🌆
        } else if (hour_now >= '15' && hour_now <= '17') {
          ucapanWaktu = 'sᴏʀᴇ 🌇'
        } else if (hour_now >= '17' && hour_now <= '18') {
          ucapanWaktu = 'sᴇʟᴀᴍᴀᴛ ᴘᴇᴛᴀɴɢ 🌇'
        } else if (hour_now >= '18' && hour_now <= '23') {
          ucapanWaktu = 'ᴍᴀʟᴀᴍ 🌃'
        } else {
          ucapanWaktu = 'sᴇʟᴀᴍᴀᴛ ᴍᴀʟᴀᴍ 🌃'
        }	
        return ucapanWaktu
}
