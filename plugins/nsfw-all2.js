let handler = async (m, { conn, command }) => {
let nyenye = `https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=Papah-Chan`
    conn.sendFile(m.chat, funix, 'done', 'Done', m) 
}
handler.help = ['hollolewd', 'sideoppai', 'animefeets', 'animebooty', 'animethighss', 'animearmpits', 'lewdanimegirls', 'biganimetiddies']
handler.tags = ['nsfw']
handler.command = /^(hollolewd|sideoppai|animefeets|animebooty|animethighss|animearmpits|lewdanimegirls|biganimetiddies)$/i
handler.premium = true

module.exports = handler
