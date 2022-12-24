let { webp2png } = require('../lib/webp2mp4')
let handler = async (m, { conn, usedPrefix, command }) => {
  if (!m.quoted) throw `balas stiker dengan perintah *${usedPrefix + command}*`
  let mime = m.quoted.mimetype || ''
  if (!/webp/.test(mime)) throw `balas stiker dengan perintah *${usedPrefix + command}*`
  let media = await m.quoted.download()
  let out = Buffer.alloc(0)
  if (/webp/.test(mime)) {
    out = await webp2png(media)
  }
  await conn.sendFile(m.chat, out, 'out.png', '*Nihh Kakk >_<*', m, false, { thumbnail: out, contextInfo: { externalAdReply :{
    showAdAttribution: true,
    mediaUrl: 'https://github.com/Kangsad01',
    mediaType: 2,
    description: deslink, 
    title: titlink,
    body: wm,
    thumbnail: await(await fetch(img)).buffer(),
    sourceUrl: 'https://github.com/Kangsad01'
     }}
  })
}
handler.help = ['toimg']
handler.tags = ['sticker']
handler.command = ['toimg']

module.exports = handler
