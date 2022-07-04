let handler = async(m, { conn, text }) => {
if (!text) return conn.reply(m.chat, 'Silahkan masukan query', m)
let funix = `https://api.zacros.my.id/search/konachan?query=${text}`
conn.sendFile(m.chat, funix, 'done', 'Done', m) 
}
handler.help = ['konachan'].map(v => v + ' <query>')
handler.tags = ['anime', 'internet']
handler.command = /^(konachan)$/i

module.exports = handler