let handler = async (m, { conn, command }) => {
let funix = `https://api.lolhuman.xyz/api/random/nsfw/hentai?apikey=Papah-Chan`
    conn.sendFile(m.chat, funix, '', m)
}
handler.help = ['hentai']
handler.tags = ['nsfw']
handler.command = /^(hentai)$/i
//buatan hyzer, recode by RenFunix
module.exports = handler
