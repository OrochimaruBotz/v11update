let handler = async (m, { conn, command }) => {
let funix = `https://api-reysekha.herokuapp.com/api/wallpaper/boruto?apikey=APIKEY`
    conn.sendFile(m.chat, funix, 'done', 'Done', m) 
}
handler.help = ['boruto']
handler.tags = ['anime']
handler.command = /^(boruto)$/i
//buatan hyzer, recode by RenFunix
module.exports = handler
