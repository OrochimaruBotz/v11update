import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `*wa.me/6282148864989*\nJoin GC Kami Untuk Mengetahui Update Selanjutnya\nSilahkan join link dibawah ,Terimakasih`
conn.sendHydrated(m.chat, str, wm, pp, 'https://chat.whatsapp.com/JMv6TBnYGCe7NngMhLdGmb', 'gc bot', null, null, [
['𝙼𝙴𝙽𝚄', '/menu']
], m)
}
handler.command = handler.help = ['sc']
handler.tags = ['info']

export default handler
