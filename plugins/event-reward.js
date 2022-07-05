let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
    let user = db.data.users[m.sender]
    if (user.reward === 1) throw `Kamu sudah mengeclaim hadiah reward JarsPy 1.6! Tunggu hadiah nya next update ya!`
    if (user.reward === 0) {
        await conn.sendMessage(m.chat, await(await fetch(thumbfoto)).buffer(), `Terimakasih sudah menggunakan JarsPy, hingga sekarang JarsPy sudah berjalan selama 1 bulan lebih.\nBerikut hadiah mu:

Limit = 5000
EXP = 200.000

Tunggu update selanjutnya ya!`.trim(), watermark, 'Profile', '.inv')
        user.reward += 1
        user.limit += 5000
        user.exp += 200000
    }
}
handler.help = ['reward']
handler.tags = ['rpg']

handler.command = /^(reward)$/i
handler.premium = false
handler.register = true
handler.limit = false
module.exports = handler