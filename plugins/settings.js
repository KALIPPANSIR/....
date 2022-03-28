let fetch = require ('node-fetch')
let handler = async (m, { conn }) => {
    let haruno = `┌ 「 𝐎𝐏𝐄𝐍 / 𝐂𝐋𝐎𝐒𝐄」
    ᴄʟɪᴄᴋ ᴏɴ ᴛʜᴇ ʙᴇʟᴏᴡ ʙᴜᴛᴛᴏɴs ᴛᴏ ᴏᴘᴇɴ ᴏʀ ᴄʟᴏsᴇ ᴛʜᴇ ɢʀᴏᴜᴘ🙂
`.trim()
    await conn.send2ButtonLoc(m.chat, await (await fetch("https://www.linkpicture.com/q/IMG-20220327-WA0949.jpg")).buffer(), haruno, '© ᴋᴀʟɪᴘᴘᴀɴsᴇʀ', 'ᴏᴘᴇɴ', '.grup open', 'ᴄʟᴏsᴇ', '.grup close', m)
}
handler.tags = ['grup']
handler.help = ['open/close']
handler.command = /^(settings)$/i
module.exports = handler
