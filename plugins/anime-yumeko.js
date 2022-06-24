let handler = async (m, { conn, command }) => {
let funix = `https://api-reysekha.herokuapp.com/api/wallpaper/yumeko?apikey=APIKEY`
    conn.sendFile(m.chat, funix, m) 
}
handler.help = ['yumeko']
handler.tags = ['anime']
handler.command = /^(yumeko)$/i
//buatan hyzer, recode by RenFunix
module.exports = handler
