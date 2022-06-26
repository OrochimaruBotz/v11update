
let handler = async(m, { conn, text, participants }) => {
  let teks = `${text ? text : ' '}\n\n`
		      	for (let mem of participants) {
		            teks += `@${mem.id.split('@')[0]}\n`
				}
                conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['otagall <pesan>']
handler.tags = ['owner']
handler.command = /^(otagall)$/i

handler.owner = true
handler.group = true

module.exports = handler


