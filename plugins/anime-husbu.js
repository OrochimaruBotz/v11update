let handler = async (m, { conn, command }) => {
let funix = `https://api.xteam.xyz/randomimage/husbu2?APIKEY=MIMINETBOT`
    conn.sendFile(m.chat, funix, m) 
}
handler.help = ['husbu']
handler.tags = ['anime']
handler.command = /^(husbu)$/i
//buatan hyzer, recode by RenFunix
module.exports = handler
