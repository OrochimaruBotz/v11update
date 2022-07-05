let handler = async (m, { conn, command }) => {
let funix = `https://api-reysekha.herokuapp.com/api/nsfw/${command}?apikey=APIKEY`
    conn.sendFile(m.chat, funix, 'done', 'Done', m) 
}
handler.help = ['ahegao', 'ass', 'bdsm', 'blowjob', 'cuckold', 'cum', 'ero', 'femdom', 'foot', 'gangbang', 'glasses', 'hentai', 'jahy', 'manga', 'masturbation', 'neko', 'orgy', 'panties', 'pussy', 'neko2','tentacles', 'thighs', 'yuri', 'zettai']
handler.tags = ['nsfw']
handler.command = /^(ahegao|ass|bdsm|blowjob|cuckold|cum|ero|femdom|foot|gangbang|glasses|hentai|jahy|manga|masturbation|neko|orgy|panties|pussy|neko2|tentacles|thighs|yuri|zettai)$/i
handler.premium = true

module.exports = handler