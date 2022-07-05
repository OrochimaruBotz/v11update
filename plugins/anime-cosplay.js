let handler = async (m, { conn, command }) => {
let funix = `https://api.zacros.my.id/randomimg/cosplay`
    conn.sendFile(m.chat, funix, 'done', 'Done', m) 
}
handler.help = ['cosplay']
handler.tags = ['anime']
handler.command = /^(cosplay)$/i
//buatan hyzer, recode by RenFunix
module.exports = handler
