jogadores = []
function add() {
    let jogador = {
        jogador: document.getElementById("input-name").value,
        numeros: this.gerarNumeros(8)
    }
    console.log("jogador ==> ", jogador)
    this.jogadores.push(jogador)

    var node = document.createElement("div");
    node.classList.add("grid_4");
    var span = document.createElement("span");
    span.classList.add("grid_4");
    span.appendChild(document.createTextNode("BINGO"));
    node.appendChild(span);
    for (let i = 0; i < jogador.numeros.length; i++){
        if(Math.floor(jogador.numeros.length/2)==i){
            var nodeX = document.createElement("div");
            nodeX.classList.add("grid_1");
            nodeX.appendChild(document.createTextNode('X'));
            node.appendChild(nodeX);
        }
        var nodeInternal = document.createElement("div");
        nodeInternal.classList.add("grid_1");
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
        console.log('numero_atual ===> ', numero)
        if (numeros.findIndex(n => {
            console.log('numero ===> ', n)
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