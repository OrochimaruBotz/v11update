let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let pepe = 'https://telegra.ph/file/03a6714e27dd039ccba21.jpg'
  let baper = await fetch(pepe).then(a => a.buffer())

  let aine = '6282148864989@s.whatsapp.net'
  let a = await conn.profilePictureUrl(conn.user.jid, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
  let b = await conn.profilePictureUrl(owner[0]+'@s.whatsapp.net', 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
  let c = pickRandom([a, b])
  let d = await fetch(c).then(a => a.buffer())
  let prepare = await require('@adiwajshing/baileys').generateWAMessageFromContent(m.key.remoteJid,{listMessage:{
  title: `${await conn.getName(conn.user.jid)}`,
  description: ` _• Sewa Bot & Up To Premium •_
        
Paket Premium :
Premium 1 Minggu (VIP) = Rp 7.000
Premium 1 Bulan (VVIP) = Rp 15.000

Keuntungan Premium :
Dapatkan akses tanpa batas menggunakan fitur yang tidak dapat digunakan oleh free user.

Paket Invite
Invite 3 Hari = Free
Invite 1 Minggu = Rp 5.000
Invite 1 Bulan = Rp 10.000

Keuntungan Invite :
Mengundang bot tanpa harus membeli Premium dengan harga yang lebih terjangkau.

❏ Payment :
Gopay = 082148864989
Dana = 082148864989
Telkomsel = 082148864989

▌│█║▌║▌║║▌║▌║█│▌

wa.me/${owner[0]}
*Bukan Bot*
*Owner ${conn.user.name}*
`,
  buttonText: 'Harga Udah Sesuai',
  listType: 2,
  productListInfo: {
  productSections: [{
  title:'Klik untuk order',
  products:[{productId:'5197986630319968'}]}],
  headerImage: { productId: '5197986630319968',
  jpegThumbnail: baper },
  businessOwnerJid: `6281349163752@s.whatsapp.net`
  },
  footerText: 'https://chat.whatsapp.com/JMv6TBnYGCe7NngMhLdGmb',
  }},{})
  conn.relayMessage(prepare.key.remoteJid,prepare.message,{messageId:prepare.key.id})
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)

}
handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^(sewa)$/i

module.exports = handler

function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)]
    }
