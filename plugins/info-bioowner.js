let handler = async (m, { conn, args, usedPrefix, command }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `*───────[ BIODATA OWNER ]───────*
💌 ɴᴀᴍᴀ : ʀᴇɴғᴜɴɪx
✉️ ɴᴀᴍᴀ ᴀsʟɪ : ᴀɴᴅɪ
♂️ ɢᴇɴᴅᴇʀ : Laki - laki
🕋 ᴀɢᴀᴍᴀ : Islam
⏰ ᴛᴀɴɢɢᴀʟ ʟᴀʜɪʀ : 31 ᴊᴜʟɪ 2002
🎨 ᴜᴍᴜʀ : 19
🧮 ᴋᴇʟᴀs : ʟᴜʟᴜsᴀɴ ᴅᴄᴏᴅɪɴɢ
🧩 ʜᴏʙʙʏ : ᴍᴇᴍʙᴀᴄᴀ ᴋᴏᴍɪᴋ ᴀɴɪᴍᴇ ᴛᴇʟᴀɴᴊᴀɴɢ😔☝️
🗺️ ᴛᴇᴍᴘᴀᴛ ᴛɪɴɢɢᴀʟ : sᴀᴍᴀʀɪɴᴅᴀ, ɪɴᴅᴏɴᴇsɪᴀ
❤️ ᴋᴇsᴜᴋᴀᴀɴ : ᴅɪsᴄᴏʀᴅ.ᴊs
💔 ʙᴇɴᴄɪ : ᴏʀᴀɴɢ ᴄɪɴᴀ

*───────[ sᴏᴄɪᴀʟ ᴍᴇᴅɪᴀ ]───────*
📷 ɪɴsᴛᴀɢʀᴀᴍ : @renfunix
🇫  ғᴀᴄᴇʙᴏᴏᴋ : Ndiie
🏮 ʏᴏᴜᴛᴜʙᴇ : Ren Funix
🐈 ɢɪᴛʜᴜʙ: RenFunix

`
conn.sendHydrated(m.chat, teksbio, wm, ppown, "wa.me/" + nomorown, "💬 ᴄʜᴀᴛs", null,null, [["ᴅᴏɴᴀsɪ", '.donasi'], [null, null],[null,null]], m)
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i

export default handler
