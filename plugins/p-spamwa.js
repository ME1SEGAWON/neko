let fetch = require('node-fetch')
let handler = async (m, { conn, args, command, usedPrefix }) => {
  if (!args[0]) throw `nomer nya mana?\n\ncontoh ${usedPrefix  + command} 895********`
let res = await fetch('https://m.redbus.id/api/getOtp?number=' + args[0] + '&cc=62&whatsAppOpted=true&disableOtpFlow=undefined')
    let json = await res.json()
    
    m.reply(wait)
await conn.reply(m.chat, json.Message, 0, {
  contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: linkig,
    mediaType: 2,
    description: deslink , 
    title: titlink,
    body: wm, 
    thumbnail: bg,
    sourceUrl: linkgc
     }}
  })
}
handler.help = ['spamwa'].map(v => v + ' <number>')
handler.tags = ['premium']
handler.command = /^spamwa?$/i

handler.premium = true

module.exports = handler