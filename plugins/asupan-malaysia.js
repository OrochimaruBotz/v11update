let handler = async (m, { conn }) => {
let funix = 'https://api.zacros.my.id/asupan/malaysia'
    conn.sendFile(m.chat, funix, 'done', 'Done', m) 
}
handler.help = ['malaysia']
handler.tags = ['internet']
handler.command = /^(malaysia)$/i

module.exports = handler
