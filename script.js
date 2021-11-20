function carregar() {
let today = new Date()
let hoje = today.getDay()
let hora = today.getHours()


const sayToMe = document.getElementById('mensagem')

sayToMe.innerHTML = hoje

const mensagens = ['A persistência é o caminho do êxito.', 'O tambor faz muito barulho mas é vazio por dentro.',
                     'Sou abraços, sorrisos, ânimo, bom humor, sarcasmo, preguiça e agora sono.',
                     'A melhor maneira de começar uma amizade é com uma boa gargalhada. De terminar com ela, também.',
                     'Nada no mundo é mais perigoso que a ignorância sincera e a estupidez conscienciosa.',
                     'O deboche é a defesa natural do corpo contra perguntas idiotas.',
                     'O preço que se paga para ser simpático , você recebe algumas moedas de deboche como troco !!',
                    'Se você gosta tanto assim de cuidar da minha vida, que tal pagar as minhas contas também?',
                    'O Ministério da Saúde adverte: cuidar da vida dos outros pode acarretar esquecimento para sua própria.',
                    'Sua opinião é igual a anúncio do Youtube: ignoro em 5 segundos.',
                    'Tudo bem se você não gosta de mim. Nem todo mundo tem bom gosto.','A imaginação oferece às pessoas consolação por aquilo que não podem ser e humor por aquilo que efectivamente são.',
                    'O pessimismo é humor; o otimismo é vontade.','Aquele que conheceu apenas a sua mulher, e a amou, sabe mais de mulheres do que aquele que conheceu mil.',
                    'Melhores amigos, na verdade, são irmãos que por algum erro não caíram na nossa família.',
                    'Tenho um lado irônico. Tenho um lado insuportável. Tenho um lado amável. E cada um tem o meu lado que merece.',
                    'Ela tem força, ela tem sensibilidade, ela é guerreira. Ela é uma deusa, ela é mulher de verdade.',
                    'A arte maior é o jeito de cada um... vivo pra ser feliz não vivo pra ser comum.']   


 function selecionaMensagem(){
    let getMensagem =mensagens[ Math.floor(Math.random() * (mensagens.length - 1)+1)]
    return getMensagem
 }


const elMensagem = document.getElementById('mensagem')

const sauda = document.getElementById('mensagem2')

if((hora >= 0) && (hora <= 11)){
    elMensagem.innerHTML = selecionaMensagem()
    sauda.textContent = 'Bom dia'+`\u{2600}`
    document.body.style.backgroundImage = 'URL(./img/morning.jpg)'
}else if((hora >= 12) && (hora < 18)){
    elMensagem.innerHTML = selecionaMensagem()
    sauda.textContent = 'Boa Tarde'+`\u{26C5}`
    document.body.style.backgroundImage = ' URL(./img/afternoon.jpg)'
    sayToMe.style.color=''
}else if((hora >=18) && (hora <= 23)){
    elMensagem.innerHTML = selecionaMensagem()
    sauda.textContent = 'Boa noite'+`\u{1F319}`
    document.body.style.backgroundImage = 'URL(./img/night.jpg)'
    sayToMe.style.color='#fff'
    
    
    
    
}
}




