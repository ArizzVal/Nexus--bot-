var handler = async (m, { conn, command }) => {

let str = `*「 🌟 DONAR 🌟 」*
---------------------
💙 *PAYPAL*
🩵 *${paypal}*
---------------------
👑 *Creadores del bot*
💬 wa.me/573027866596
💌wa.me/527294888993`

await conn.sendFile(m.chat, imagen1, 'Curiosity.jpg', str, fkontak)}

handler.help = ['donar']
handler.tags = ['info']
handler.command = /^donar|donate|donasi$/i

handler.register = true

export default handler
