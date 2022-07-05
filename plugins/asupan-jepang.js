let handler = async (m, { conn }) => {
let funix = 'https://api.zacros.my.id/asupan/japan'
    conn.sendFile(m.chat, funix, 'done', 'Done', m) 
}
handler.help = ['jepang']
handler.tags = ['internet']
handler.command = /^(jepang)$/i

module.exports = handler

