let jogadores = []
function add() {
    this.jogadores.push()
}

window.onload = () => {
    for(let i = 1; i<=25; i++){
        for(let j = 0; j<5; j++){

        }
        var node = document.createElement("LI");          // Create a <li> node
        node.classList.add("grid_1");
        var textnode = document.createTextNode(i);         // Create a text node
        node.appendChild(textnode);                              // Append the text to <li>
        document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList"
    }
}