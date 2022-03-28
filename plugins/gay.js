let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let url = global.API('https://some-random-api.ml', '/canvas/gay', {
    avatar: await conn.getProfilePicture(who).catch(_ => 'https://www.linkpicture.com/q/IMG-20220327-WA0949.jpg'),
  })
  conn.sendFile(m.chat, url, 'gay.png', 'ɴᴀɴᴅʜᴜᴛᴛʏ ᴠ3', m, 0, { thumbnail: await (await fetch(url)).buffer() })
}

handler.help = ['gay']
handler.tags = ['maker']
handler.command = /^(gay)$/i

module.exports = handler
