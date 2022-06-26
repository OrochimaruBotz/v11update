let handler = async (m, { conn, command }) => {
let funix = `https://api-reysekha.herokuapp.com/api/wallpaper/chiho?apikey=APIKEY`
    conn.sendFile(m.chat, funix, 'done', 'Done', m) 
}
handler.help = ['chiho']
handler.tags = ['anime']
handler.command = /^(chiho)$/i
//buatan hyzer, recode by RenFunix
module.exports = handler
