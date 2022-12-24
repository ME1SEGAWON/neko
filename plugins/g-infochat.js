let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!m.quoted) m.reply('Reply Pesan')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks = `⭔ @${i.userJid.split('@')[0]}\n┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                conn.reply(m.chat, teks, m)
            }

handler.help = ['infochat']
handler.tags = ['grup']
handler.command = /^infochat$/i

module.exports = handler