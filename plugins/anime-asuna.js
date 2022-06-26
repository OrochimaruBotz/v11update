let handler = async (m, { conn, command }) => {
let funix = `https://api-reysekha.herokuapp.com/api/wallpaper/asuna?apikey=APIKEY`
    conn.sendFile(m.chat, funix, 'done', 'Done', m) 
}
handler.help = ['asuna']
handler.tags = ['anime']
handler.command = /^(asuna)$/i
//buatan hyzer, recode by RenFunix
module.exports = handler
