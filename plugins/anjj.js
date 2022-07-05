let handler = async (m, { conn }) => {
let caption = `*anjir toxic🗿 awokawokaowk truskan bakat mu*`

conn.sendButton( m.chat, caption, `©️ Shiro BOT`, `p`, `.trigger`, m)

       }
       
handler.customPrefix = /^(peler|njig|anj|babi|bab1|ngentod|sial|anjir|anjirt|kontol|goblok|pantek|jahanam|ngentod|ngewe|bodoh|memek|ewe|ewek|pepek|asu|asuk|asw)/i
handler.command = new RegExp
module.exports = handler
