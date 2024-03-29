let syntaxerror = require('syntax-error')
let util = require('util')

let handler = async (m, _2) => {
  let { conn, usedPrefix, command, text, noPrefix, args, groupMetadata, participants, isOwner, isMods } = _2
  let _return
  let _syntax = ''
  let _text = (/^(>>)/.test(usedPrefix) ? 'return ' : '') + noPrefix
  let old = m.exp * 1
  try {
    let i = 15
    let f = {
      exports: {}
    }
    let exec = new (async () => { }).constructor('print', 'm', 'handler', 'require', 'conn', 'Array', 'process', 'args', 'groupMetadata', 'participants', 'isOwner', 'module', 'exports', 'argument', _text)
    _return = await exec.call(conn, (...args) => {
      if (--i < 1) return
      console.log(...args)
      return conn.reply(m.chat, util.format(...args), m)
    }, m, handler, require, conn, CustomArray, process, args, groupMetadata, participants, isOwner, f, f.exports, [conn, _2])
  } catch (e) {
    let err = await syntaxerror(_text, 'Execution Function', {
      allowReturnOutsideFunction: true,
      allowAwaitOutsideFunction: true
    })
    if (err) _syntax = '```' + err + '```\n\n'
    _return = e
  } finally {
    conn.reply(m.chat, _syntax + util.format(_return), fkontak, { contextInfo: { 
    externalAdReply :{
    showAdAttribution: true,
    mediaUrl: linkgc,
    mediaType: 2,
    description: deslink , 
    title: titlink,
    body: wm,
    thumbnail: await(await fetch(img)).buffer(),
    sourceUrl: 'https://wa.me/62895336282144?text=halo+bang'
     }}
  })
    m.exp = old
  }
}
handler.help = ['>', '>>']
handler.tags = ['advanced']
handler.customPrefix = /^>?> /
handler.command = /(?:)/i
handler.owner = true

module.exports = handler

class CustomArray extends Array {
  constructor(...args) {
    if (typeof args[0] == 'number') return super(Math.min(args[0], 10000))
    else return super(...args)
  }
}