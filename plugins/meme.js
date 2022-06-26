let handler = async (m, { conn, command }) => {
let funix = `https://api.zacros.my.id/randomimg/meme`
    conn.sendFile(m.chat, funix, 'Next', '.meme', m) 
}
handler.help = ['meme']
handler.tags = ['internet']
handler.command = /^(meme)$/i
//buatan hyzer, recode by RenFunix
module.exports = handler
