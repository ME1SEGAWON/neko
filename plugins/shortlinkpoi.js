let fetch = require('node-fetch')

let handler = async (m, { conn, usedPrefix, args }) => {
	let title = `— *S H O R T E D  U R L* —`
    let caption = 'Silahkan Pilih Type Urlnya kak'
const sections = [
   {
	title: "TYPE URL",
	rows: [
	    {title: "TinyUrl", rowId: ".short " + args[0] + " tinyurl"},
	    {title: "LinkPoi", rowId: ".short " + args[0] + " linkpoi"},
	]
    },
]

const listMessage = {
  text: caption,
  footer: null,
  title: title,
  buttonText: "Shorted Link",
  sections
}

if (!args[0]) return m.reply('Linknya mana?')
if (!args[1]) return conn.sendMessage(m.chat, listMessage)

//TINY
let res = await fetch(`https://hardianto.xyz/api/short/tinyurl?url=${args[0]}&apikey=hardianto`)
    let json = await res.json()
    let { result } = await json
if (args[1] == "tinyurl") {
m.reply('_*Prosses...*_')
conn.reply(m.chat, `💌 *Link:* ${result}`,m)
}
//--------------

//LINKPOI
let poi = await fetch(`https://linkpoi.ga/api.php?url=${args[0]}`)
	let jpoi = await poi.json()
	let { shorturl } = jpoi
	
if (args[1] == "linkpoi") {
	m.reply('_*Prosses...*_')
conn.reply(m.chat, `💌 *Link:* ${shorturl.replace('\/','/')}`,m)
}
//------------
}
handler.help = ['short <url> <type>']
handler.tags = ['internet']
handler.command = /^(short(url)?)$/i

module.exports = handler