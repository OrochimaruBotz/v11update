let handler = async(m,{text, conn}) => {
let funix = 'https://api.zacros.my.id/asupan/santuy'
conn.sendFile(m.chat, funix, 'done', 'Done', m) 
}
handler.help = ['santuy']
handler.tags = ['internet']
handler.command = /^(santuy)$/i

module.exports = handler
