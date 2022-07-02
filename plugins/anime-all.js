let handler = async (m, { conn, command }) => {
let funix = `https://api-reysekha.herokuapp.com/api/wallpaper/${command}?apikey=APIKEY`
    conn.sendFile(m.chat, funix, 'done', 'Done', m) 
}
handler.help = ['akira', 'akiyama', 'anna', 'asuna', 'ayuzawa', 'boruto', 'chiho', 'chitoge', 'deidara', 'erza', 'elaina', 'eba', 'emilia', 'hestia', 'hinata', 'inori', 'isuzu', 'itachi', 'itori', 'kaga', 'kagura', 'kaori', 'keneki', 'kurumi', 'madara', 'mikasa', 'miku', 'minato', 'naruto', 'yotsuba', 'shinomiya', 'yumeko', 'tejina', 'gremory', 'shina', 'shinka', 'rize', 'yuki', 'tsunade', 'onepiece', 'pokemon', 'nezuko', 'sagiri', 'sasuke', 'sakura']
handler.tags = ['anime']
handler.command = /^(akira|akiyama|anna|asuna|ayuzawa|boruto|chiho|chitoge|deidara|erza|elaina|eba|emilia|hestia|hinata|inori|isuzu|itachi|itori|kaga|kagura|kaori|keneki|kurumi|madara|mikasa|miku|minato|naruto|yotsuba|shinomiya|yumeko|tejina|gremory|shina|shinka|rize|yuki|tsunade|onepiece|pokemon|nezuko|sagiri|sasuke|sakura)$/i
handler.limit = true

module.exports = handler
