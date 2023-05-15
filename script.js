// Obtenha o elemento do modal
var modal = document.getElementById("myModal");

// Obtenha o botão que abre o modal
var btn = document.getElementById("modal-btn");

// Obtenha o elemento de fechar o modal
var span = document.getElementsByClassName("close")[0];

// Ação ao clicar no botão para abrir o modal
btn.onclick = function() {
  modal.style.display = "block";
}

// Ação ao clicar no elemento para fechar o modal
span.onclick = function() {
  modal.style.display = "none";
}

// Ação ao clicar fora do modal para fechá-lo
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// Ação de aparecer o btn no card


//fuction

function showBtn () {
  let btnCard = document.getElementById("btn-card");
  btnCard.classList.remove("botao-oculto");
}

function hideBtn () {
  let btnCard = document.getElementById("btn-card");
  btnCard.classList.add("botao-oculto");
}

