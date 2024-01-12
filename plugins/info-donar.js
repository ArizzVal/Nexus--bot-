var handler = async (m, { conn, command }) => {

let str = `*「 🌟 DONAR 🌟 」*
---------------------
💙 *PAYPAL*
🩵 *${paypal}*
---------------------
👑 *Creadores del bot*
💬 wa.me/573027866596
🦆😉wa.me/542215034412`

await conn.sendFile(m.chat, media, 'Curiosity.jpg', str, fkontak)}

handler.help = ['donar']
handler.tags = ['info']
handler.command = /^donar|donate|donasi$/i

handler.register = true

export default handler
