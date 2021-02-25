const help = (*) => {
	return `> *Cᴏᴍᴀɴᴅᴏs ᴅᴇ ғɪɢᴜʀɪɴʜᴀ* <
comando : *${*}sticker* or *${*}stiker*
descri莽茫o: converter imagem/gif/video em adesivo
uso: responder imagem/gif/v铆deo ou enviar imagem/gif /v铆deo com legenda\n
comando : *${*}sticker nobg* or *${*}stiker nobg*
descri莽茫o : converter imagem em adesivo removendo o fundo
uso : responder imagem ou enviar imagem com legenda\n 
comando : *${*}toimg*
descri莽茫o : converter adesivo em imagem
uso : transforma figurinha em imagem\n
comando : *${*}tsticker* or *${*}tstiker*
descri莽茫o : converter texto em adesivo
usᴏ : *${*}texto do adesivo aqui*\n
> *C岽忈磵岽�纱岽呩磸 岽呩磭 岽嶀磭岽嶀磭s馃槀* <
comando : *${*}meme*
descri莽茫o : imagens aleat贸rias de meme [portuguese]
uso : apenas envie o comando\n
comando : *${*}memeindo*
descri莽茫o : imagens aleat贸rias de meme [portuguese]
uso : apenas envie o comando\n
> *M岽�瑟s 岽勧磸岽嶀磤纱岽呩磸s 岽嶀磭岽� 岽勈溼磤岽樶磤* <
comando : *${*}gtts*
descrição : convert text to speech/audio
uso : *${*}gtts [cc] [text]*\nexample : *${*}gtts ja Onii-chan*\n
comando : *${*}loli*
descri莽茫o : imagens aleat贸rias de loli
uso : apenas envie o comando\n
comando : *${*}nsfwloli*
descri莽茫o : imagens aleat贸rias de nsfw loli
uso : basta enviar o comando\n
comando : *${*}url2img*
descrição : tirar screenshots da web
uso : *${*}url2img [tipe] [url]*\n
comando : *${*}simi*
descrição : sua mensagem será respondida por simi
uso : *${*}simi sua menssagem*\n
comando : *${*}ocr*
descrição : pegue o texto na foto
uso : responder imagem ou enviar imagem com legenda\n
comando : *${*}wait*
descrição : procure anime com imagem [ O que anime é isso / aquilo ]
uso : responder imagem ou enviar imagem com legenda\n
comando : *${*}setprefix*
descrição : substituir prefixo
uso : *${*}setprefix [texto|opcional]*\nexample : *${*}setprefix !*
nota : Este comando só pode ser usado pelo proprietário do bot\n
> *Cᴏᴍᴀɴᴅᴏs ᴅᴏ ɢʀᴜᴘᴏ* <
comando : *${*}add*
descrição : adicionar membro ao grupo
uso : *${*}add 62813xxxxx*\n
nota : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
comando : *${*}kick*
descrição : expulsa membros do grupo
uso : *${*}kick @tagdomenbro*\n
nota : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
comando : *${*}promote*
descrição : tornar o membro do grupo como administrador do grupo
uso : *${*}promote @tagmember*\n
nota : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
comando : *${*}demote*
descrição : tornar o administrador do grupo como membro do grupo
uso : *${*}demote @tagdomembro*\n
nota : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
comando : *${*}linkgroup*
descrição : pegue o link do grupo
uso : apenas envie o comando
nota : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
comando : *${*}leave*
descrição : Faça o bot sair do grupo
uso : apenas envie o comando
nota : Só pode ser usado por administradores de grupo e proprietário do bot\n
comando : *${*}tagall*
descrição : marca todos os membros do grupo, incluindo administradores também
uso : apenas envie o comando
nota : Este comando pode ser usado se você for um administrador de grupo\n
comando : *${*}simih*
descrição : ative o modo simi no grupo
uso : *${*}simih 1* para ativar o modo simi e *${*}simih 0* para desativar o modo simi
nota : Este comando pode ser usado se você for um administrador de grupo\n`
}

exports.help = help
