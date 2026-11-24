const input = document.querySelector("#input-tarefa");
const btn = document.querySelector("#btn-adicionar");
const lsita = document.querySelector("#lista-tarefas");

let tarefa = [];

function adicionar() {
    const texto = input.value;
    const tarefaObj = {id: Date.now(), texto, concluido: false}
    listaTarefas.push(tarefaObj);
}

function renderizar(tarefa) {
    const li = document.createElement("li");
    li.className = "todo-item";
    li.dataset.id = tarefa.id;
    li.innerHTML = `
    <span class="texto"></span>
    <button class="btn btn-sm btn-outline-success" data-acao="concluir">Ok</button>
    <button class="btn btn-sm btn-outline-danger" data-acao="excluir">X</button>`;

    li.querySelector(".texto").textContent = tarefa.texto;

}


btn.addEventListener("click", adicionar);



