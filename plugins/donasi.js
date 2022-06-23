let handler = async m => m.reply(`
╭─「 Donasi 」
│ • Gopay = [0821-4886-4989]
│ • DANA = [0821-4886-4989]
│ • Telkomsel = [0821-4886-4989]
│ 
│   • Atau saweria
│  > https://saweria.co/renfunix
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler