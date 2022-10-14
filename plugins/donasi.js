let handler = async m => m.reply(`
╭─「 Donasi 」
│ • Gopay = [0888-0494-7282]
│ • DANA = [0888-0494-7282]
│ • Telkomsel = [0888-0494-7282]
│ 
│   • Atau saweria
│  > https://saweria.com/humazboti
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
