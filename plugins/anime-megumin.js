let handler = async (m, { conn, command }) => {
let funix = `http://hadi-api.herokuapp.com/api/randomImage/img/megumin`
    conn.sendFile(m.chat, funix, 'done', 'Done', m) 
}
handler.help = ['megumin']
handler.tags = ['anime']
handler.command = /^(megumin)$/i
//buatan hyzer, recode by RenFunix
module.exports = handler
