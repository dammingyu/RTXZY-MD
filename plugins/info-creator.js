/**ubah no lu biar ada owner nya
Isi semua yg perlu di isi tapi jangan ngasal
error fixs sendiri bg
By TioXd**/

const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m, {conn}) => {
const vcard = `BEGIN:VCARD
VERSION:3.0
N:Sy;Bot;;;
FN: TioXd
item.ORG: Creator Bot
item1.TEL;waid=6289508996352:6289508906342@s.whatsapp.net
item1.X-ABLabel:Nomor Creator Bot / Owner Bot
item2.EMAIL;type=INTERNET:SPAMMING CHAT WILL GOT BLOCKED
item2.X-ABLabel:Email
item3.ADR:;;🇮🇩INDONESIA;;;;
item3.X-ABADR:ac
item3.X-ABLabel:📍CENTRAL JAVA
item4.EMAIL;type=INTERNET: APPROVED QUESTION
item4.X-ABLabel:Contact 👤
item5.URL:${instagram}
item5.X-ABLabel:Website
END:VCARD`
const sentMsg  = await conn.sendMessage(
    m.chat,
    { 
        contacts: { 
            displayName: 'OWNER MINGYU', 
            contacts: [{ vcard }] 
        }
    }
)
conn.sendMessage(m.chat, { text: `Hay kak *@${await m.sender.split('@')[0]}*, itu ownerku, jangan spam yah >_<`, mentions: [m.sender] }, { quoted: sentMsg })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
