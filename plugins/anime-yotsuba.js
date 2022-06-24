let handler = async (m, { conn, command }) => {
let funix = `https://api-reysekha.herokuapp.com/api/wallpaper/yotsuba?apikey=APIKEY`
    conn.sendFile(m.chat, funix, m) 
}
handler.help = ['yotsuba']
handler.tags = ['anime']
handler.command = /^(yotsuba)$/i
//buatan hyzer, recode by RenFunix
module.exports = handler
