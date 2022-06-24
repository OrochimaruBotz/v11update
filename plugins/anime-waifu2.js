let handler = async (m, { conn, command }) => {
let funix = `https://api-reysekha.herokuapp.com/api/wallpaper/waifu2?apikey=APIKEY`
    conn.sendFile(m.chat, funix, m) 
}
handler.help = ['waifu2']
handler.tags = ['anime']
handler.command = /^(waifu2)$/i
//buatan hyzer, recode by RenFunix
module.exports = handler
