let handler = async (m, { conn, command }) => {
  try {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    else who = m.quoted.sender ? m.quoted.sender : m.sender
    let pp = await conn.profilePictureUrl(who, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
    conn.sendMedia(m.chat, pp, m, { jpegThumbnail: await (await fetch(pp)).buffer() })
  } catch {
    let sender = m.sender
    let pp = await conn.profilePictureUrl(sender, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
    await conn.sendMedia(m.chat, pp, m, { contextInfo: { externalAdReply :{
        showAdAttribution: true,
        mediaUrl: 'https://github.com/Kangsad01',
        mediaType: 2,
        description: deslink, 
        title: run,
        body: wm,
        thumbnail: bg,
        sourceUrl: 'https://github.com/Kangsad01'
        }}
       })
  }
}
handler.help = ['getpp <@tag/reply>']
handler.tags = ['fun']
handler.command = /^(getpp|getpic?t?)$/i

module.exports = handler
