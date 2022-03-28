const similarity = require('similarity')
const threshold = 0.72

let handler = m => m

handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*cek/i.test(m.quoted.contentText)) return !0
    this.tebaklagu = this.tebaklagu ? this.tebaklagu : {}
    if (!(id in this.tebaklagu)) return m.reply('Guess the song has ended')
    if (m.quoted.id == this.tebaklagu[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.tebaklagu[id][1]))
        if (['.cek', 'Help', ''].includes(m.text)) return !0
        if (m.text.toLowerCase() == json.judul.toLowerCase()) {
            db.data.users[m.sender].exp += this.tebaklagu[id][2]
            await this.sendButton(m.chat, benar + ` +${this.tebaklagu[id][2]} XP`, 'ᴀᴘᴀʀɴᴀ ᴍᴡᴏʟ ᴠ2', 'Guess the song', '.tebaklagu', m)
            clearTimeout(this.tebaklagu[id][3])
            delete this.tebaklagu[id]
        } else if (similarity(m.text.toLowerCase(), json.judul.toLowerCase().trim()) >= threshold) m.reply(dikit)
        else m.reply(salah)
    }
    return !0
}

module.exports = handler
