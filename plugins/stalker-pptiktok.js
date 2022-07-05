let handler = async(m, { conn, text }) => {
if (!text) return conn.reply(m.chat, 'Masukkan Username Tiktok', m)
let funix = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=${lolkey}`
conn.sendFile(m.chat, funix, 'done', 'Done', m) 
}
handler.help = ['pptiktok'].map(v => v + ' <username>')
handler.tags = ['internet']
handler.command = /^(pptiktok)$/i
handler.limit = true

module.exports = handler