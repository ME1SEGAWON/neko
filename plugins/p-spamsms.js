let fetch = require('node-fetch')
let handler = async (m, { conn, args, command, usedPrefix }) => {
  if (!args[0]) throw `nomer nya mana?\n\ncontoh ${usedPrefix  + command} 895********`


let res = await fetch("https://app-spamotp.herokuapp.com/api/spamsms?phone=" + args[0] )
    let json = await res.json()
    
    let msg = `Terkirim: ${json.result.terkirim}
Gagal: ${json.result.gagal}
Total spam: ${json.result.total_spam}
Jenis layanan: ${json.result.layanan}`

    m.reply(wait)
await conn.reply(m.chat, msg, 0, {
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
handler.help = ['spamsms'].map(v => v + ' <number>')
handler.tags = ['premium']
handler.command = /^spamsms?$/i

handler.premium = true

module.exports = handler