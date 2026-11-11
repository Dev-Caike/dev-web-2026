const input = document.querySelector('.input-group-3 input');
const btn = document.querySelector('#btn-adicionar');
const list = document.querySelector('#Lista-tarefas');

let listaTarefas = [];

function renderizar() {
    if (!list) return;

    list.innerHTML = '';

    listaTarefas.forEach((tarefa) => {
        const li = document.createElement('li');
        li.className = 'todo-item d-flex justify-content-between align-items-center mb-2';
        li.style.textDecoration = tarefa.concluida ? 'line-through' : 'none';

        const texto = document.createElement('span');
        texto.textContent = tarefa.text;

        const actions = document.createElement('div');
        actions.className = 'd-flex gap-2';

        const btnOk = document.createElement('button');
        btnOk.textContent = 'OK';
        btnOk.className = 'btn btn-sm btn-success';
        btnOk.addEventListener('click', () => {
            tarefa.concluida = !tarefa.concluida;
            renderizar();
        });

        const btnExcluir = document.createElement('button');
        btnExcluir.textContent = 'X';
        btnExcluir.className = 'btn btn-sm btn-danger';
        btnExcluir.addEventListener('click', () => {
            listaTarefas = listaTarefas.filter((item) => item.id !== tarefa.id);
            renderizar();
        });

        actions.appendChild(btnOk);
        actions.appendChild(btnExcluir);

        li.appendChild(texto);
        li.appendChild(actions);
        list.appendChild(li);
    });
}

function adicionar() {
    if (!input) return;

    const text = input.value.trim();
    if (!text) {
        alert('Digite uma tarefa!');
        input.focus();
        return;
    }

    listaTarefas.push({
        id: Date.now(),
        text: text,
        concluida: false
    });

    input.value = '';
    renderizar();
}

if (btn) {
    btn.addEventListener('click', adicionar);
}

if (input) {
    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            adicionar();
        }
    });
}
