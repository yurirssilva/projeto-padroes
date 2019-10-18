jogadores = []
sorteados = []
function add() {
    document.getElementById("sorteio-btn").disabled = false
    let jogador = {
        nome: document.getElementById("input-name").value,
        numeros: this.gerarNumeros(8),
        sorteados: []
    }
    document.getElementById("input-name").value = ''
    var jogadorLista = document.createElement("div");
    jogadorLista.appendChild(document.createTextNode(' - '+jogador.nome));
    document.getElementById("lista-jogadores").appendChild(jogadorLista);

    this.jogadores.push(jogador)

    var node = document.createElement("div");
    node.classList.add("grid_4");
    var span = document.createElement("span");
    span.classList.add("grid_4");
    span.appendChild(document.createTextNode("BINGO - " + jogador.nome));
    span.classList.add('titulo');
    node.appendChild(span);
    for (let i = 0; i < jogador.numeros.length; i++) {
        if (Math.floor(jogador.numeros.length / 2) == i) {
            var nodeX = document.createElement("div");
            nodeX.classList.add("grid_1");
            nodeX.appendChild(document.createTextNode('X'));
            nodeX.classList.add('numero')
            node.appendChild(nodeX);
        }
        var nodeInternal = document.createElement("div");
        nodeInternal.classList.add("grid_1");
        nodeInternal.classList.add("number_" + jogador.numeros[i]);
        nodeInternal.classList.add('numero')
        var textnode = document.createTextNode(jogador.numeros[i]);
        nodeInternal.appendChild(textnode);
        node.appendChild(nodeInternal);
    }
    document.getElementById("principal").appendChild(node);
}

window.onload = () => {
    for (let i = 1; i <= 25; i++) {
        for (let j = 0; j < 5; j++) {

        }
        var node = document.createElement("LI");          // Create a <li> node
        node.classList.add("grid_1");
        node.classList.add("number_" + i);
        node.classList.add('numero')
        var textnode = document.createTextNode(i);         // Create a text node
        node.appendChild(textnode);                              // Append the text to <li>
        document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList"
    }
}

function gerarNumeros(qtd) {
    let numeros = []
    let i = 0;
    do {
        let numero = Math.floor(Math.random() * 25 + 1);
        if (numeros.findIndex(n => {
            if (n == numero)
                return true;
        }) == -1) {
            numeros.push(numero);
            i++;
        }

    } while (i < qtd)
    return numeros.sort(function (a, b) {
        return a - b;
    });
}

function gerar() {
    document.getElementById("input-name").disabled = true;
    document.getElementById("input-btn").disabled = true;
    let numero = Math.floor(Math.random() * 25 + 1);
    if (this.sorteados.findIndex(n => {
        if (n == numero)
            return true;
    }) == -1) {
        sorteados.push(numero);
        var style = document.createElement('style');
        style.innerHTML = `
        .number_${numero} {
            background-color: black;
            color: white;
        }
        `;
        document.head.appendChild(style);
        this.analisarCartelas(numero)
    } else {
        this.gerar();
    }
}

function analisarCartelas(numero) {
    for (let jogador of this.jogadores) {
        if (jogador.numeros.findIndex(n => {
            if (n == numero)
                return true;
        }) != -1) {
            jogador.sorteados.push(numero);
        }
    }
    let ganhadores = []
    let ganhadoresTexto = ''
    for (let jogador of this.jogadores) {
        if (jogador.sorteados.length == jogador.numeros.length) {
            ganhadores.push(jogador)
            ganhadoresTexto+= jogador.nome + ', '
        }
    }
    ganhadoresTexto.slice(ganhadoresTexto.length-2, ganhadoresTexto.length)
    if (ganhadores.length) {
        document.getElementById("sorteio-btn").disabled = true;
        let mensagem = 'O' + (ganhadores.length == 1 ? '' : 's') + ' jogador' + (ganhadores.length == 1 ? ': ' : 'es: ') +ganhadoresTexto + (ganhadores.length == 1 ? 'ganhou!' : 'ganharam!')
        alert(mensagem)
    }
}

function btnPress(e) {
    //See notes about 'which' and 'key'
    if (e.keyCode == 13) {
        this.add();
    }
}

function reiniciar(){
    document.location.reload(true);
}