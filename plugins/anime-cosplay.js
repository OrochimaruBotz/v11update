let handler = async (m, { conn, command }) => {
let funix = `https://api-reysekha.herokuapp.com/api/random/cosplay?apikey=APIKEY`
    conn.sendFile(m.chat, funix, m) 
}
handler.help = ['cosplay']
handler.tags = ['anime']
handler.command = /^(cosplay)$/i
//buatan hyzer, recode by RenFunix
module.exports = handler
