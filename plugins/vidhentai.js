//created by Scooppt
let fetch = require('node-fetch')

let handler  = async (m, { conn, text }) => {
 try {
    let res = await fetch('https://bx-hunter.herokuapp.com/api/randomvidhentai?apikey=oQpiCHRf')
    let json = await res.json()
    if (json.result) throw json
    let caption = `
Random Vid Hentai
`.trim()
    conn.sendFile(m.chat, json.video_1, '', caption, m)
   } catch (e) {
        console.log(e)
        throw '_*Error!*_'
    }
}

handler.help = ['vidhentai']
handler.tags = ['nsfw']
handler.command = /^vidhentai$/i
handler.premium = true
handler.limit = true

handler.fail = null

module.exports = handler
