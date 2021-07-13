let handler = async m => m.reply(`
╭─「 Donasi • linkaja 」
│ • hubungi owner ketik .owner]
 |  • Saweria https://saweria.co/Doraemond
 |   • Three [wa.me/089601145546]
│ • Telkomsel [wa.me/6282387704390]
 |  • Saya harap kamu menyukai bot saya
 |      dan jangan lupa untuk mensuport saya
 |     karena saya sangat menyukai dora
 |     # by owner Dora :D
 |       saya harap kamu bahagia
╰────

╭─「 Dorameond 
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
