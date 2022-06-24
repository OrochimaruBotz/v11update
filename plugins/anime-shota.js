let handler = async (m, { conn, command }) => {
let funix = `https://api-reysekha.herokuapp.com/api/wallpaper/shota?apikey=APIKEY`
    conn.sendFile(m.chat, funix, m) 
}
handler.help = ['shota']
handler.tags = ['anime']
handler.command = /^(shota)$/i
//buatan hyzer, recode by RenFunix
module.exports = handler
