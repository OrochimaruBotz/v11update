let handler = async (m, { conn, command }) => {
let funix = `https://api.lolhuman.xyz/api/random2/${command}?apikey=Papah-Chan`
    conn.sendFile(m.chat, funix, 'done', 'Done', m) 
}
handler.help = ['lewd', 'eron', 'solo', 'anal', 'keta', 'tits', 'kuni', 'solog', 'erok', 'feetg', 'lewdk', 'erofeet', 'holoero', 'classic', 'erokemo', 'futanari', 'eroyuri', 'yaoi']
handler.tags = ['nsfw']
handler.command = /^(lewd|eron|solo|anal|keta|tits|kuni|solog|erok|feetg|lewdk|erofeet|holoero|classic|erokemo|futanari|eroyuri|yaoi)$/i
handler.premium = true

module.exports = handler
 
