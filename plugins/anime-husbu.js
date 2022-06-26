let handler = async (m, { conn, command }) => {
let funix = `https://zenzapis.xyz/randomanime/husbu?apikey=sonelstore`
    conn.sendFile(m.chat, funix, m) 
}
handler.help = ['husbu']
handler.tags = ['anime']
handler.command = /^(husbu)$/i
//buatan hyzer, recode by RenFunix
module.exports = handler
