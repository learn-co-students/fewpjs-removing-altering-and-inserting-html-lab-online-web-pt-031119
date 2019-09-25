// Write your code here!
let main = document.getElementById("main");
main.remove();
let header = document.createElement('h1');
document.body.appendChild(header);
header.setAttribute('id', 'victory');

let newHeader = document.querySelector('h1#victory');
header.innerHTML = 'YOUR-NAME is the champion';
