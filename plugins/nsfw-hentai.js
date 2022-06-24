let handler = async (m, { conn, command }) => {
let funix = `https://api.lolhuman.xyz/api/random/nsfw/hentai?apikey=Papah-Chan`
    conn.sendButtonImg(m.chat, funix, 'Nih', wm2, 'Next', `.hentai`, m) 
}
handler.help = ['hentai']
handler.tags = ['nsfw']
handler.command = /^(hentai)$/i
//buatan hyzer, recode by RenFunix
module.exports = handler
