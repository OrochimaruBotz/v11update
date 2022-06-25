let handler = async (m, { conn, command }) => {
let funix = `https://api-reysekha.herokuapp.com/api/wallpaper/tejina?apikey=APIKEY`
    conn.sendFile(m.chat, funix, m) 
}
handler.help = ['tejina']
handler.tags = ['anime']
handler.command = /^(tejina)$/i
//buatan hyzer, recode by RenFunix
module.exports = handler
