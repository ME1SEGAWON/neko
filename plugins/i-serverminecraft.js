//https://api.lolhuman.xyz/api/minecraft/org.mc-complex.com?apikey=SGWN

/*{
    "status": 200,
    "message": "success",
    "result": {
        "version": "1.18.2",
        "players": {
            "online": 1511,
            "max": 3000
        },
        "latency": 241.004
    }
}*/

let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
    if (!args[0]) throw 'Uhm.. Masukkan Ip Server Minecraft'
let res = await fetch(`https://api.lolhuman.xyz/api/minecraft/${args[0]}?apikey=SGWN`)
    let json = await res.json()
    
await conn.reply(m.chat, `Sedang Mendapatkan Status Server....`, 0, {
  contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: linkig,
    mediaType: 2,
    description: deslink , 
    title: titlink,
    body: wm,
    thumbnail: await(await fetch(img)).buffer(),
    sourceUrl: linkgc
     }}
  })
 let txt = `*Status Minecraft* \n\nversion: ${json.result.version} \nplayer online: ${json.result.players.online} \nplayer max: ${json.result.players.max} \npingserver: ${json.result.latency} ms`
    await conn.sendButton(m.chat, txt, wm, `Cek Again`, `.infoservermc ${args[0]}`, m)
}
handler.help = ['infoservermc'].map(v => v + ' <ip>')
handler.tags = ['internet']
handler.command = /^infoservermc$/i

module.exports = handler