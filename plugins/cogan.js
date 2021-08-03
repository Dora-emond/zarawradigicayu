// NUMPANG WM
// NIH APIKEY GRATISAN AWOK²

let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://api.xteam.xyz/randomimage/cowo?APIKEY=dbf7d751069cb695`
  conn.sendFile(m.chat, res, 'cowo.jpg', `Nih...`, m, false)
}
handler.help = ['cogan'].map(v => v + ' ')
handler.tags = ['image']

handler.command = /^(cogan)$/i

module.exports = handler