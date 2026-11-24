const input = document.querySelector("#input-tarefa");
const btn = document.querySelector("#btn-adicionar");
const lista = document.querySelector("#lista-tarefas");

const CHAVE = "todo-aula15";

let listaTarefas = JSON.parse(localStorage.getItem(CHAVE)) ?? [];

function salvar() {
  localStorage.setItem(CHAVE, JSON.stringify(listaTarefas));
}

function adicionar() {
  const texto = input.value;
  if (!texto) return;

  const tarefaObj = { id: Date.now(), texto, concluido: false };
  listaTarefas.push(tarefaObj);
  salvar();
  renderizar(tarefaObj);

  input.value = "";
  input.focus();
}

function renderizar(tarefa) {
  const li = document.createElement("li");
  li.className = "todo-item" + (tarefa.concluido ? " concluida" : "");
  li.dataset.id = tarefa.id;
  li.innerHTML = `<span class="texto"></span>
    <button class="btn btn-sm btn-outline-success" data-acao="concluir">OK</button>
    <button class="btn btn-sm btn-outline-danger" data-acao="excluir">X</button>`;

  li.querySelector(".texto").textContent = tarefa.texto;
  lista.appendChild(li);
}

btn.addEventListener("click", adicionar);

lista.addEventListener("click", (e) => {
  const btnClicado = e.target.closest("button");
  if (!btnClicado) return;
  const li = btnClicado.closest(".todo-item");
  const id = Number(li.dataset.id);

  if (btnClicado.dataset.acao === "concluir") {
    const tarefaSelecionada = listaTarefas.find((tarefa) => tarefa.id === id);
    tarefaSelecionada.concluido = !tarefaSelecionada.concluido;
    salvar();
    li.classList.toggle("concluida", tarefaSelecionada.concluido);

    console.log("Concluir");
  }

  if (btnClicado.dataset.acao === "excluir") {
    listaTarefas = listaTarefas.filter((t) => t.id !== id);
    salvar();
    li.remove();
    console.log("Excluir");
  }
});

listaTarefas.forEach(renderizar);
