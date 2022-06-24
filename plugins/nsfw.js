let handler = async (m, { conn, command }) => {
let ren = `https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=Papah-Chan`
    conn.sendButtonImg(m.chat, ren, 'Nih', wm2, 'Next', `.${command}`, m) 
}
handler.help = ['ahegao', 'ass', 'bdsm', 'blowjob', 'cum', 'femdom', 'gangbang', 'glasses', 'manga', 'neko', 'orgy', 'panties', 'tentacles', 'yuri', 'sideoppai', 'animefeets', 'animebooty', 'hentai', 'animearmpits', 'lewdanimegirls', 'biganimetiddies']
handler.tags = ['nsfw']
handler.command = /^(ahegao|ass|bdsm|blowjob|cum|femdom|gangbang|glasses|manga|neko|orgy|panties|tentacles|thighs|yuri|sideoppai|hentai|animefeets|animebooty|animearmpits|lewdanimegirls|biganimetiddies)$/i
//buatan hyzer, recode by RenFunix
module.exports = handler
