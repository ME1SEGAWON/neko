let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendStimg(m.chat, 'https://telegra.ph/file/f61a7c96f3f86b6c5214f.png', m, { packname: "", author: colong2, 
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

handler.customPrefix = /^(ok)$/i
handler.command = new RegExp

module.exports = handler