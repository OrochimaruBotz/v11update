let handler = async (m, { conn, text, command }) => {
    if (!text) throw 'Masukkan Teks.....................'
    let funix = `https://api.lolhuman.xyz/api/${command}?apikey=Papah-Chan&name=${text}`
    conn.sendFile(m.chat, funix, 'done', 'Done', m) 
}
handler.help = ['toloserti', 'fuckboy', 'fuckgirl', 'bucinserti', 'goodboy', 'goodgirl', 'badboy', 'badgirl'].map(v => v + ' <teks>')
handler.tags = ['maker']
handler.command = /^(toloserti|fuckboy|fuckgirl|bucinserti|goodboy|goodgirl|badboy|badgirl)$/i
handler.premium = true
handler.limit = true

module.exports = handler
