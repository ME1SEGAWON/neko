let handler = async (m, { conn, isROwner, text }) => {

mbc = `Hai Kak @${m.sender.split("@")[0]} 
Saya EvilBotz Saya Disini Ingin Membantu Kalian Membuat Sticker Download Video/Lagu Youtube, Tiktok Dll.`
let buttons = [
{buttonId: `${prefix}m rpg`, buttonText: {displayText: 'Rpg Menu'}, type: 1},
{buttonId: `${prefix}m all`, buttonText: {displayText: 'All Menu'}, type: 1}
]
let buttonMessage = {
document: bg, 
fileName: wm, 
mimetype: 'application/pdf',
jpegThumbnail: bg,
caption: mbc,
footer: "© Bot WhatsApp 2022",
fileLength: "999999999",
mentions:[m.sender],
buttons: buttons,
headerType: 4,
contextInfo: {
"mentionedJid": [m.sender],
"externalAdReply": {
"title": `Hai Kak @${m.sender.split("@")[0]}`, 
"mediaType": 2, 
"thumbnail": bg,
"previewType": "VIDEO",
"mediaUrl": 'https://youtu.be/b0CCKgVEhlk',
"sourceUrl": 'https://chat.whatsapp.com/CswK4kvQD1u7SfSmsYfMHZ'
}}
}
conn.sendMessage(m.chat, buttonMessage, { quoted: {
				  key: {
				   fromMe: false,
				   participant: `0@s.whatsapp.net`,
				   remoteJid: "6281903153426-1626053991@g.us"
				  },
				  message: {
				   orderMessage: {
				    itemCount: 99999999,
				    status: 1,
				    surface: 1,
				    message: wm,
				    orderTitle: '999999999', 
				    sellerJid: `0@s.whatsapp.net` 
				   }
				  }
				 } })
}

handler.command = /^tes|bot$/i

handler.rowner = true

module.exports = handler