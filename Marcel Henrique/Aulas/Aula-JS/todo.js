const input =  document.querySelector("#Nova Tarefa");
const btn = document.querySelector("#btn-adicionar");
const lista = document.querySelector("#lista-tarefas");

let tarefas = [];

function adicionar() 
   {
    const texto = input.value;
    const tarefaObj = { id: Date.now(), texto, concluido: false };
    listaTarefas.push(tarefaObj);
    }

    function renderizar(tarefa)   {
        const li = document.createElement("li");
        li.className = "todo-item";
        li.dataset.id = tarefa.id;
        li.inner


    }
        
    
    
    
    btn.addEventListener("click", adicionar);