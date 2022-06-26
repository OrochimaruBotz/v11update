let handler = async (m, { conn, command }) => {
let funix = `https://api-reysekha.herokuapp.com/api/wallpaper/kaori?apikey=APIKEY`
    conn.sendFile(m.chat, funix, 'done', 'Done', m) 
}
handler.help = ['kaori']
handler.tags = ['anime']
handler.command = /^(kaori)$/i
//buatan hyzer, recode by RenFunix
module.exports = handler
