const input = document.querySelector('#input-tarefa');
const btn = document.querySelector('#btn-adicionar');
const lista = document.querySelector('#lista-tarefas');

let tarefas = [];

function adicionar() {
    const texto = input.value;
    const tarefaObj = {id: Date.now(), texto, concluida: false};
    tarefas.push(tarefaObj);
   renderizar(tarefaObj);
}

function renderizar(tarefa) {
    const li = document.createElement('li');
    li.className = "todo-item";
    li.dataset.id = tarefa.id;
    li.innerHTML = `<span class="texto"></span>
        <button class="btn btn-sm btn-outline-success" data-acao="concluir">Concluir</button>
        <button class="btn btn-sm btn-outline-danger" data-acao="excluir">Excluir</button>`;

    li.querySelector('.texto').textContent = tarefa.texto;
    lista.appendChild(li);
}
btn.addEventListener('click', adicionar);
