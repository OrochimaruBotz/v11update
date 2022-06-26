let handler = async (m, { conn, command }) => {
let funix = `https://api-reysekha.herokuapp.com/api/wallpaper/shinomiya?apikey=APIKEY`
    conn.sendFile(m.chat, funix, 'done', 'Done', m) 
}
handler.help = ['shinomiya']
handler.tags = ['anime']
handler.command = /^(shinomiya)$/i
//buatan hyzer, recode by RenFunix
module.exports = handler
