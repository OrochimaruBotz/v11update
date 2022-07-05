let handler = async(m,{text, conn}) => {
let funix = 'https://api.zacros.my.id/asupan/loli'
conn.sendFile(m.chat, funix, 'done', 'Done', m) 
}
handler.help = ['asupanloli']
handler.tags = ['internet']
handler.command = /^(asupanloli)$/i

module.exports = handler
