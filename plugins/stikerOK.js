let handler = async(m, { conn }) => {
  let a = "https://telegra.ph/file/90d392a787612bd894610.png"
  conn.sendStimg(m.chat, a, m, {packname: packname, author: author, 
  contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    showAdAttribution: true,
    mediaUrl: linkgh,
    mediaType: 2,
    description: deslink , 
    title: titlink,
    body: wm, //`${fileSizeH}`,
    thumbnail: await(await fetch(img)).buffer(),
    sourceUrl: linkgh
     }}
  })
}
handler.customPrefix= /^makasih|(terima)?kasih|mksh|thank|thanks$/i
handler.command = new RegExp

module.exports = handler