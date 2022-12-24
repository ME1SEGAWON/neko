let handler = async (m, { conn }) => {
     conn.reply(m.chat, `Bot ini menggunakan script dari github 

Original Base by Nurutomo:
https://github.com/nurutomo/wabot-aq

Base Fokusdotid: https://github.com/Fokusdotid/Family-MD

Recode By The.Sad.Boy01: https://github.com/Kangsad01/bot-md

Node_modules for bot-md:
https://www.mediafire.com/file/peyj19jiz4hq5qt/node_modules.zip/file

pliss follow pluss kasih ✨ ya pak!`, m)
}
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sc(ript(bot)?)?|sourcecode)$/i

module.exports = handler

// https://github.com/Fokusdotid/Family-MD