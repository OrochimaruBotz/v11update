let handler = async (m, { conn }) => {
let funix = 'https://api.zacros.my.id/asupan/cecan'
    conn.sendFile(m.chat, funix, 'done', 'Done', m) 
}
handler.help = ['cecan']
handler.tags = ['internet']
handler.command = /^(cecan)$/i

module.exports = handler
