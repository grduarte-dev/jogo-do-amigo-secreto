let nomeAmigo = document.getElementById("amigo");
let listaAmigos = document.getElementById("listaAmigos");
let listaSorteio = document.getElementById("resultado");

let amigos = [];

function adicionarAmigo() {
   const amigo = nomeAmigo.value;
  if (amigo && !amigos.includes(amigo.toUpperCase())) {
    amigos.push(amigo.toUpperCase());
    listaAmigos.textContent = amigos.join(", ");
    nomeAmigo.value = "";
  }
}
function sortearAmigo() {
  listaSorteio.innerHTML = "";

  embaralhaArray(amigos);
  for (i = 0; i < amigos.length; i++) {
    if (i == amigos.length - 1) {
      listaSorteio.innerHTML += `${amigos[i]} --> ${amigos[0]}<br>`;
    } else {
      listaSorteio.innerHTML += `${amigos[i]} --> ${amigos[i + 1]}<br>`;
    }
  }
}

function embaralhaArray(amigos) {
  for (let i = amigos.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [amigos[i], amigos[j]] = [amigos[j], amigos[i]];
  }
}

function reiniciar() {
  amigos.length = 0;
  listaSorteio.innerHTML = "";
  nomeAmigo.value = "";
  listaAmigos.textContent = "";
}