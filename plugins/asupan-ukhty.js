let handler = async(m,{text, conn}) => {
let funix = 'https://api.zacros.my.id/asupan/ukhty'
conn.sendFile(m.chat, funix, 'done', 'Done', m) 
}
handler.help = ['ukhty']
handler.tags = ['internet']
handler.command = /^(ukhty)$/i

module.exports = handler
