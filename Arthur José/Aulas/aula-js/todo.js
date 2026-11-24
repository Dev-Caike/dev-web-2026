const input = document.querySelector("#input-tarefa");
const btn = document.querySelector("#btn-adicionar");
const lista = document.querySelector("#lista-tarefas");

let listaTarefas = [];

function adicionar() {
  const texto = input.value;
  if (!texto) return;

  const tarefaObj = { id: Date.now(), texto, concluido: false };
  listaTarefas.push(tarefaObj);
  renderizar(tarefaObj);
}

function renderizar(tarefa) {
  const li = document.createElement("li");
  li.className = "todo-item";
  li.dataset.id = tarefa.id;
  li.innerHTML = `<span class="texto"></span>
    <button class="btn btn-sm btn-outline-success" data-acao="concluir">OK</button>
    <button class="btn btn-sm btn-outline-danger" data-acao="excluir">X</button>`;

  li.querySelector(".texto").textContent = tarefa.texto;
  lista.appendChild(li);
}

btn.addEventListener("click", adicionar);