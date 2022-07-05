let handler = async (m, { conn }) => {
let funix = 'https://api.zacros.my.id/asupan/indonesia'
    conn.sendFile(m.chat, funix, 'done', 'Done', m) 
}
handler.help = ['indonesia']
handler.tags = ['internet']
handler.command = /^(indonesia)$/i

module.exports = handler
