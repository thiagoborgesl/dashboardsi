let dicasDeSenha = {
    "pessima": [
        "Tente misturar letras maiúsculas e minúsculas.",
        "Que tal adicionar alguns números na sua senha?",
        "Você já pensou em usar símbolos como '@', '#', ou '$' na sua senha?",
        "Evite senhas óbvias, como '123456' ou 'password'.",
        "Não use informações pessoais facilmente adivinháveis, como o seu aniversário.",
        "Experimente uma frase longa em vez de uma única palavra.",
        "Tente usar as primeiras letras de uma frase ou de uma música que você goste.",
        "Evite repetir o mesmo caractere muitas vezes seguidas.",
        "Não use palavras comuns do dicionário sem nenhuma modificação.",
        "Evite usar o mesmo padrão de teclado, como 'qwerty' ou 'asdfg'."
    ],
    "ruim": [
        "Aumente a complexidade adicionando mais caracteres na sua senha.",
        "Evite usar o seu nome de usuário como senha.",
        "Não use sequências de números, como '1234' ou '6789'.",
        "Tente uma combinação de palavras aleatórias.",
        "Experimente uma senha que contenha pelo menos 12 caracteres.",
        "Considere usar um gerenciador de senhas para criar e armazenar senhas complexas.",
        "Evite usar a mesma senha em vários sites ou serviços.",
        "Adicione alguma irregularidade na sua senha, como uma letra em maiúsculo no meio.",
        "Não use informações que possam ser encontradas nas suas redes sociais.",
        "Evite usar nomes de familiares ou de animais de estimação."
    ],
    "boa": [
        "Continue trocando a sua senha regularmente.",
        "Para aumentar ainda mais a segurança, você pode adicionar mais símbolos.",
        "Tente usar palavras em diferentes idiomas.",
        "Use um espaço se o serviço permitir. Isso é raramente usado e pode fortalecer a sua senha.",
        "Considere utilizar letras acentuadas ou caracteres especiais.",
        "Faça a substituição de letras por números ou símbolos que se pareçam (ex: 'E' por '3').",
        "Tente misturar categorias, como um animal e um objeto aleatório.",
        "Crie uma senha baseada em um evento recente que seja fácil para você se lembrar, mas difícil para outros adivinharem.",
        "Para uma senha mais segura, evite usar apenas um tipo de caractere.",
        "Aumente a segurança através da aleatoriedade. Evite padrões óbvios."
    ],
    "otima": [
        "Continue atualizando suas senhas regularmente, mesmo que sejam fortes.",
        "Mantenha-se informado sobre as melhores práticas de segurança de senhas.",
        "Mesmo com uma ótima senha, não a compartilhe com ninguém.",
        "Lembre-se de usar diferentes senhas para diferentes contas.",
        "Mesmo com uma senha forte, ative a autenticação de dois fatores, se disponível.",
        "Continue usando senhas longas - quanto maior, melhor.",
        "Evite escrever suas senhas. Se necessário, use um gerenciador de senhas seguro.",
        "Evite usar senhas baseadas em eventos populares ou tendências - elas podem ser mais fáceis de adivinhar.",
        "Não se esqueça de sair das contas quando usar computadores públicos, mesmo com uma senha forte.",
        "Continue sendo criativo na criação de senhas. A diversidade pode melhorar a segurança."
    ]
};

const passwordFeedback = {
    'pessima': [
      "Parece que sua senha é feita de algodão doce - doce, mas sem substância. Tente novamente!",
      "Se sua senha fosse um guerreiro, seria um mero aprendiz. Vamos forjar algo mais resistente.",
      "Oops! Sua senha é tão intimidante quanto um coelho recém-nascido. Vamos adicioná-la mais força.",
      "Sua senha é mais previsível do que a conclusão de uma novela das oito. Precisamos melhorar isso.",
      "Sua senha faz mais rir do que uma piada de tiozão. Tente novamente.",
      "Essa senha é tão frágil quanto uma teia de aranha. Vamos torná-la uma muralha.",
      "Acredito que sua senha acabou de sair de um conto de fadas. Vamos dar a ela um toque de realidade.",
      "Sua senha está mais para uma seda suave do que para uma armadura robusta. Vamos fortalecê-la!",
      "Sua senha é como um soufflé - leve demais. Podemos adicionar mais consistência?",
      "Se sua senha fosse um livro, seria uma comédia pastelão. Que tal transformá-la em um suspense intrigante?",
      "Sua senha é tão instável quanto um sinal de celular na floresta. Vamos aprimorá-la.",
      "Sua senha é mais óbvia que o vilão em uma trama de super-herói. Vamos adicionar um toque de mistério.",
      "Sua senha parece que tirou folga da academia. Precisamos fortalecê-la.",
      "Se essa senha fosse uma fortaleza, seria feita de palha. Vamos transformá-la em pedra.",
      "Sua senha é como um navio sem âncora - totalmente à deriva. Vamos ancorá-la em segurança."
    ],
  
    'ruim': [
      "Sua senha é como comida de avião - serve, mas falta tempero. Vamos adicionar alguns ingredientes!",
      "Sua senha é um aprendiz na arte da segurança. Vamos torná-la uma mestra.",
      "Sua senha é como um sitcom - confortável, mas sem grandes reviravoltas. Que tal adicionarmos um pouco de drama?",
      "Sua senha ainda está no treino de recrutas. Vamos levá-la para a guerra.",
      "Essa senha está no ensino médio. Vamos mandá-la para a pós-graduação!",
      "Sua senha é como um sorvete derretendo - ainda é doce, mas podemos torná-la mais consistente.",
      "Sua senha está escalando a montanha da segurança - vamos chegar ao cume?",
      "Essa senha é como um donut - gostosa, mas cheia de buracos. Vamos preencher esses vazios!",
      "Essa senha é como uma imitação barata. Funciona, mas o original sempre é melhor.",
      "Essa senha tem a semente de algo bom, mas ainda não é uma árvore robusta. Vamos regá-la.",
      "Sua senha é como um curta-metragem - tem potencial, mas ainda falta algo. Vamos transformá-la em um longa-metragem.",
      "Essa senha é como um pão sem manteiga - precisa de mais sabor.",
      "Sua senha está no caminho certo, mas ainda não cruzou a linha de chegada. Adicione mais força!",
      "Sua senha está andando de bicicleta, mas pode andar de moto. Vamos acelerar!",
      "Se a sua senha fosse um carro, seria um modelo básico. Que tal trocá-la por uma limusine?"
    ],
  
    'boa': [
      "Excelente! Sua senha é como um bom jogo de tabuleiro - estratégica e imprevisível.",
      "Sua senha é um prato bem preparado - satisfaz, mas poderíamos adicionar uma pitada de pimenta?",
      "Sua senha é como um bom prato de massa - recheada e saborosa. Que tal acrescentarmos um molho especial?",
      "Essa senha é digna de nota, mas sabemos que você pode criar uma obra-prima! Vamos lá?",
      "Ótimo! Sua senha é como um enigma bem elaborado - intrigante e difícil de decifrar!",
      "Muito bom! Sua senha já superou muitos roteiros de novela!",
      "Sua senha é como um bom whisky - forte e encorpada. Que tal transformá-la em uma mistura premium?",
      "Essa senha está se aproximando do topo. Que tal a ajudarmos a conquistar o Everest da segurança?",
      "Sua senha está com um bom ritmo, mas pode ser a atração principal. Vamos aperfeiçoá-la!",
      "Muito bem! Sua senha é como um bom mistério - envolvente e com um final inesperado.",
      "A senha é boa, mas podemos torná-la uma vencedora do 'Master Password'. Vamos aprimorá-la!",
      "Ótimo! Sua senha é como uma reviravolta em uma boa série - nos surpreende e mantém a gente adivinhando!",
      "Essa senha está pronta para o baile, mas vamos torná-la a rainha da festa. Tente adicionar mais complexidade.",
      "Sua senha é sólida! Mas que tal torná-la uma muralha intransponível?",
      "Sua senha é como um segredo bem guardado - seguro e confiável. Que tal torná-la um enigma indescritível?"
    ],
  
    'otima': [
      "Essa é uma verdadeira senha! Resistente como uma rocha e sagaz como um detetive!",
      "Essa senha é como um super-espião - sempre um passo à frente e impossível de rastrear.",
      "Incrível! Sua senha é como o final perfeito para uma trilogia épica - surpreendente e gratificante!",
      "Uau! Sua senha é mais blindada que um carro-forte!",
      "Essa senha é como um labirinto de espelhos - desorientadoramente complexa. Excelente!",
      "Maravilhoso! Sua senha é mais enigmática que o mistério da Esfinge!",
      "Fantástico! Sua senha é um verdadeiro castelo com fossos e torres. Formidável!",
      "Essa senha é mais protegida que a Fórmula Secreta do Sr. Siriguejo!",
      "Sua senha é tão forte que poderia ser o protagonista de um filme de ação. Excelente!",
      "Se a segurança fosse um jogo de vídeo game, sua senha teria acabado de ganhar. Ótimo trabalho!"
    ]
}
  