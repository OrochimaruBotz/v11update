let fetch = require("node-fetch")

let handler = async (m, { conn }) => {
//https://bx-hunter.herokuapp.com/api/randomvidhentai?apikey=d6IZOVLR
m.reply(wait)

let res = await fetch(`https://bx-hunter.herokuapp.com/api/randomvidhentai?apikey=d6IZOVLR`)
let json = await res.json()

conn.sendFile(m.chat, json.result.video_1, 'videohen1.mp4', 'Nih', m, false,{ contextInfo: { forwardingScore: 999, isForwarded: true }})

conn.sendFile(m.chat, json.result.video_2, 'videohen2.mp4', 'nih', m,false, { contextInfo: { forwardingScore: 999, isForwarded: true }})

}
handler.help = [ 'hentaivid']
handler.tags = ['nsfw']
handler.command = /^(hentaivid))$/i
handler.premium = true

module.exports = handler
