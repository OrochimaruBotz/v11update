let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let pepe = 'https://telegra.ph/file/33e39b4943e67fd08d71e.jpg'
  let baper = await fetch(pepe).then(a => a.buffer())

  let aine = '6282148864989@s.whatsapp.net'
  let a = await conn.profilePictureUrl(conn.user.jid, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
  let b = await conn.profilePictureUrl(owner[0]+'@s.whatsapp.net', 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
  let c = pickRandom([a, b])
  let d = await fetch(c).then(a => a.buffer())
  let prepare = await require('@adiwajshing/baileys').generateWAMessageFromContent(m.key.remoteJid,{listMessage:{
  title: `${await conn.getName(conn.user.jid)}`,
  description: ` *• sᴇᴡᴀ ʙᴏᴛ & ᴜᴘ ᴛᴏ ᴘʀᴇᴍɪᴜᴍ •*
        
 *––––––『 sᴇᴡᴀ 』––––––*
┏⫹⫺ *ʜᴇᴍᴀᴛ* 
┗$ Free (1 minggu)

┏⫹⫺ *ɴᴏʀᴍᴀʟ* 
┗$ 5k/grup (1 bulan)

┏⫹⫺ *sᴛᴀɴᴅᴀʀ* 
┗$ 20k/grup (2 bulan)

┏⫹⫺ *ᴘʀᴏ* 
┗$ 35k/grup (3 bulan)

──···────────────────···──

*––––––『 ᴘʀᴇᴍɪᴜᴍ 』––––––*
┏⫹⫺ *ʜᴇᴍᴀᴛ* 
┗$ 5k (1 minggu)

┏⫹⫺ *ɴᴏʀᴍᴀʟ* 
┗$ 10k (1 bulan)

┏⫹⫺ *ɢᴏᴏᴅ* 
┗$ 15k (3 bulan)

┏⫹⫺ *ᴘʀᴏ* 
┗$ 25k (5 bulan)                                            

*✃ ᴘᴀʏᴍᴇɴᴛ*
• *Pulsa:* [082148864989]
• *Dana:* [082148864989]
• *Gopay:* [082148864989]

▌│█║▌║▌║║▌║▌║█│▌

wa.me/${owner[0]}
*Bukan Bot!!!*
*Owner ${conn.user.name}*
`,
  buttonText: 'Harga Udah Sesuai',
  listType: 2,
  productListInfo: {
  productSections: [{
  title:'Klik untuk order',
  products:[{productId:'5225431894201667'}]}],
  headerImage: { productId: '5225431894201667',
  jpegThumbnail: baper },
  businessOwnerJid: `6282148864989@s.whatsapp.net`
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
