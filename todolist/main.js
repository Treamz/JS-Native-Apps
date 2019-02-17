var app = document.getElementById('app');
var ul = document.querySelectorAll('#app > ul');
var todoList = [
    {
        todo: 'Test',
        isComplete: false
    },
    {
        todo: 'Test2'
    },
    {
        todo: 'Test3'
    },
    {
        todo: 'Test4'
    },
    {
        todo: 'Test2'
    }
    // ,
    // {
    //     todo: 'Test3'
    // },
    // {
    //     todo: 'Test4'
    // },
    // {
    //     todo: 'Test2'
    // },
    // {
    //     todo: 'Test3'
    // },
    // {
    //     todo: 'Test4'
    // },
    // {
    //     todo: 'Test2'
    // },
    // {
    //     todo: 'Test3'
    // },
    // {
    //     todo: 'Test4'
    // }
];

window.onload = function() {
    console.log('onload run');
    for(var i = 0; i < todoList.length; i++) {
        var testTodo = document.createElement('li')
        testTodo.setAttribute('list-id',i);
        
        testTodo.innerHTML = todoList[i].todo;
        testTodo.appendChild(addBtns());
        ul[0].appendChild(testTodo);
    }
    app.addEventListener("click", function(e) {
        
        if (e.target.parentNode.classList == 'del') { 
            
            var target = e.target.parentNode.parentNode.parentNode;
            delTodo(target);
        }
        if (e.target.parentNode.classList == 'edit') { 
            var target = e.target.parentNode.parentNode.parentNode;
            editTodo(target);
        }
        if (e.target.tagName == 'LI') { 
            completeTodo(e.target);
        }
    }, true);

}

function addBtns() {
    var btns = document.createElement('div');
    btns.classList.add('btns')
    btns.innerHTML = '<button class="del"><i class="fa fa-trash-o" aria-hidden="true"></i></button><button class="edit"><i class="fa fa-pencil" aria-hidden="true"></i></button>';
    return btns;

}
function delTodo(target) {
    target.classList.toggle('noshow');
    //todoList.splice(target.getAttribute('list-id'),1);
    
    setTimeout(function() {
        target.remove();
    },400);
    delete todoList[target.getAttribute('list-id')];
    console.log(todoList);
}


function editTodo(target) {
    var newTodo = prompt();
    target.innerHTML = newTodo;
    todoList[target.getAttribute('list-id')] = newTodo;
    target.appendChild(addBtns());
    console.log(todoList);
        
}

addBtn.onclick = function() {
    if(inputField.value !== '') {
        todoList.push({todo:inputField.value});
        console.log(todoList);
        var testTodo = document.createElement('li')
        testTodo.setAttribute('list-id',todoList.length-1);
        testTodo.innerHTML = todoList[todoList.length-1].todo;
        testTodo.appendChild(addBtns());
        ul[0].appendChild(testTodo);
        inputField.value = '';
    }
}


function completeTodo(target) {
   
    target.classList.toggle('complete');
}


