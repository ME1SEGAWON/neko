let handler = async (m, { conn, usedPrefix: _p, isROwner, text }) => {

mbc = `Hai Kak @${m.sender.split("@")[0]} 

Ini List Bot Buatan Owner Ku @${owner[0].split("@")[0]}

Name: Raxcel
Number: wa.me/${owner[1]}?text=${_p}menu

Name: Evil
Number: wa.me/${owner[2]}?text=${_p}menu

Name: Lornull
Nummber: wa.me/${owner[3]}?text=${_p}menu
`
let buttons = [
{buttonId: `${_p}m rpg`, buttonText: {displayText: 'Rpg Menu'}, type: 1},
{buttonId: `${_p}m all`, buttonText: {displayText: 'All Menu'}, type: 1}
]
let buttonMessage = {
document: gb, 
fileName: run, 
mimetype: 'application/pdf',
jpegThumbnail: bg,
caption: mbc,
footer: "© Bot WhatsApp 2022 " + colong2,
fileLength: "999999999999999999999999",
mentions:[m.sender],
buttons: buttons,
headerType: 4,
contextInfo: {
"mentionedJid": [m.sender],
    externalAdReply :{
    showAdAttribution: true,
    mediaUrl: linkig,
    mediaType: 2,
    description: colong2, 
    title: titlink,
    body: wm,
    thumbnail: await(await fetch(img)).buffer(),
    sourceUrl: linkgc
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
				    message: colong2,
				    orderTitle: '999999999', 
				    sellerJid: `0@s.whatsapp.net` 
				   }
				  }
				 } })
}
handler.help = ['listbot']
handler.tags = ['info']
handler.command = /^listbot$/i



module.exports = handler