let handler = async (m, { command, text }) => {
let jawab = ['Iya','Sudah pasti','Sudah pasti bisa','Tidak','Tentu tidak','Sudah pasti tidak']
let siapa = jawab[Math.floor(Math.random() * jawab.length)]
m.reply(`
*Pertanyaan:* ${command} ${text}
*Jawaban:* ${siapa}
  `.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})
}
handler.help = ['benarkah <teks>?']
handler.tags = ['kerang']

handler.command = /^benarkah$/i
handler.limit = false

module.exports = handler
