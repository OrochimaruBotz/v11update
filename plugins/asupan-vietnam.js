let handler = async (m, { conn }) => {
let funix = 'https://api.zacros.my.id/asupan/vietnam'
    conn.sendFile(m.chat, funix, 'done', 'Done', m) 
}
handler.help = ['vietnam']
handler.tags = ['internet']
handler.command = /^(vietnam)$/i

module.exports = handler
