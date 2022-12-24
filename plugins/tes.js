let { search } = require('../lib/xnxx.js')
let handler = async (m, { conn, text }) => {
  if (!text) return conn.reply(m.chat, 'Cari apa?', m)
  let res = await search(text)
  let teks = res.result.map(v => {
   return `
*Judul:* ${v.title} 
*Link:* (${v.link})
*Info:* ${v.info}
 `.trim()
  }).filter(v => v).join('\n\n*=========================*\n\n')
 conn.reply(m.chat, '*───「 Xnxx Search 」───*\n\n' + teks, m)
}
handler.help = ['xnxxsearch <query>']
handler.tags = ['tools', 'internet']
handler.command = /^xnxs(earch)?$/i

module.exports = handler