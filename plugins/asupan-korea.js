let handler = async (m, { conn }) => {
let funix = 'https://api.zacros.my.id/asupan/korea'
    conn.sendFile(m.chat, funix, 'done', 'Done', m) 
}
handler.help = ['korea']
handler.tags = ['internet']
handler.command = /^(korea)$/i

module.exports = handler

