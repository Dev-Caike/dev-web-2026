const input = document.querySelector("#input-tarefa")
const button = document.querySelector("#btn-adicionar")
const taskList = document.querySelector("#lista-tarefas")

let tarefas = [];

function adicionar() {
    const texto = input.value;
    if(!texto) return;
    
    const tarefaObj = {id : Date.now(), texto, concluida: false};
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
}


btn.addEventListener("click", adicionar);