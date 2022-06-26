import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let res = await axios("https://api.zacros.my.id/randomimg/meme")
let json = res.data
let url = json.url
conn.sendButton(m.chat, "*Meme*", author, url, [['NEXT', `${usedPrefix + command}`]], m)}
handler.help = ['meme']
handler.tags = ['internet']
handler.command = /^(meme)$/i
export default handler
