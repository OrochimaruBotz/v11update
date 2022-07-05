let handler = async (m, { conn }) => {
let funix = 'https://api.zacros.my.id/asupan/hijaber'
    conn.sendFile(m.chat, funix, 'done', 'Done', m) 
}
handler.help = ['hijaber']
handler.tags = ['internet']
handler.command = /^(hijaber)$/i

module.exports = handler
