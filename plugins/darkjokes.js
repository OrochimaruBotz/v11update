let handler = async (m, { conn, command }) => {
let funix = `https://api.zacros.my.id/randomimg/darkjokes`
    conn.sendFile(m.chat, funix, 'done', 'Done', m) 
}
handler.help = ['darkjokes']
handler.tags = ['internet']
handler.command = /^(darkjokes)$/i
//buatan hyzer, recode by RenFunix
module.exports = handler
