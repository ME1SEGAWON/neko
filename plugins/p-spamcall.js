let fetch = require('node-fetch')
let handler = async (m, { conn, args, command, usedPrefix }) => {
  if (!args[0]) throw `nomer nya mana?\n\ncontoh ${usedPrefix  + command} 62895********`
let res = await fetch('https://api.lolhuman.xyz/api/spam/call1?apikey=SGWN&nomor=' + args[0])
    let json = await res.json()
    
    m.reply(wait)
await conn.reply(m.chat, json.result, 0, {
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
handler.help = ['spamcall'].map(v => v + ' <number>')
handler.tags = ['premium']
handler.command = /^spamcall?$/i

handler.premium = true

module.exports = handler