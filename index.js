// no longer has DOM node 'main#main

main = document.querySelector('main#main');
main.remove();

let newHeader = document.createElement('h1');
newHeader.id = 'victory'
newHeader.innerHTML = 'Lex is the champion'