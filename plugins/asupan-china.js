let handler = async (m, { conn }) => {
let funix = 'https://api.zacros.my.id/asupan/china'
    conn.sendFile(m.chat, funix, 'done', 'Done', m) 
}
handler.help = ['china']
handler.tags = ['internet']
handler.command = /^(china)$/i

module.exports = handler
