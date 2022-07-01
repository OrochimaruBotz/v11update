let handler = async (m, { conn }) => {
let funix = 'https://api.zacros.my.id/asupan/thailand'
    conn.sendFile(m.chat, funix, 'done', 'Done', m) 
}
handler.help = ['thailand']
handler.tags = ['internet']
handler.command = /^(thailand)$/i

module.exports = handler
