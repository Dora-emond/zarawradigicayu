let axios = require("axios");
let handler = async(m, { conn, text }) => {

	axios.get(`http://zekais-api.herokuapp.com/fakta`).then ((res) => {
	 	let hasil = `${res.data.result}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['fakta']
handler.tags = ['quotes']
handler.command = /^(fakta)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler