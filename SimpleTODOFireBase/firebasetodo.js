const db = firebase.firestore();
const container = document.querySelector('.container > .todo__list');
const btnAdd = document.querySelector('.add');
const inputText = document.querySelector('.todoinput');
const modal = document.querySelector('#editModal');
const modalSave = document.querySelector('#editModal > .container > button');

class FirebaseTodo {
    constructor() {
    }
    getData() {
        
        db.collection("todos").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(doc.data());
               this.createTodo(doc.data(),doc.id);
            });
        }); 
    }
    createTodo(data,id,isAdd = false) {
        let newTodo = document.createElement('div');
        newTodo.classList.add('todo');
        if(data.isComplete == true) {
            newTodo.classList.add('complete');
        }
        newTodo.setAttribute('data-id', id);
        let todoText = document.createElement('div');
        if(!isAdd) {
            todoText.innerHTML = data.text;
        }
        else {
            console.log(data);
            todoText.innerHTML = data;
        }
        todoText.classList.add('text');
        newTodo.appendChild(todoText);
        let todoBtns = document.createElement('div');
        todoBtns.classList.add('btns')
        let btnEdit = document.createElement('button');
        btnEdit.classList.add('edit')
        
        btnEdit.addEventListener('click', (e) => {
            e.stopImmediatePropagation();
            modal.classList.toggle('open');
            let elem = btnEdit.parentElement.parentElement;
            console.log(elem);
            this.editData(elem);
        });
        let btnDelete = document.createElement('button');
        btnDelete.classList.add('delete');
        btnDelete.addEventListener('click', (e) => {
            e.stopImmediatePropagation();
            let dataId = btnDelete.parentElement.parentElement;
            dataId = dataId.getAttribute('data-id');
            btnDelete.parentElement.parentElement.classList.add('removed');
            setTimeout(() =>{
                btnDelete.parentElement.parentElement.remove();
            },1000);
            firebasetodo.deleteData(dataId);
        });
        btnEdit.innerHTML = '<i class="fa fa-pencil" aria-hidden="true"></i>';
        btnDelete.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
        todoBtns.appendChild(btnEdit);
        todoBtns.appendChild(btnDelete);
        newTodo.appendChild(todoBtns);
        newTodo.addEventListener('click' ,() =>
        {
            this.isComplete(newTodo,id);
        });
        container.appendChild(newTodo);
    }
    addData() {
            let text = inputText.value;
            if(text == '') return
            db.collection("todos").add({
                text: text,
                isComplete: false
            })
            .then((docRef) => {
                this.createTodo(text,docRef.id,true);
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
    }
    deleteData(todoId) {
        console.log(todoId);
        db.collection("todos").doc(todoId).delete().then(function() {
            console.log("Document successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
    }
    isComplete(elem,todoId) {
        if(elem.classList.contains('complete')) {
            elem.classList.toggle('complete');
            db.collection("todos").doc(todoId).update({
                isComplete: false
            }).then(function() {
                console.log("Document successfully updated!");
            }).catch(function(error) {
                console.error("Error updating document: ", error);
            });
        }
        else {
            elem.classList.toggle('complete');
            console.log('complete');
            db.collection("todos").doc(todoId).update({
                isComplete: true
            }).then(function() {
                console.log("Document successfully updated!");
            }).catch(function(error) {
                console.error("Error updating document: ", error);
            });
        }
    }
    editData(elem) {
       
        let text = elem.firstChild.innerHTML;
        let textarea = modal.firstElementChild.childNodes[3];
        textarea.value  = text;
        console.log(elem.firstChild);
        let todoId = elem.getAttribute('data-id');
        modalSave.addEventListener('click', () => {
            console.log(textarea.value);
            db.collection("todos").doc(todoId).update({
                text: textarea.value
             }).then(function() {
                 console.log("Document successfully updated!");
                 modal.classList.remove('open');
                 elem.firstChild.innerHTML = textarea.value;
             }).catch(function(error) {
                 console.error("Error updating document: ", error);
             });
        });
    }
}

let firebasetodo = new FirebaseTodo();
firebasetodo.getData();

btnAdd.addEventListener('click', () => {
    firebasetodo.addData();
});

inputText.addEventListener('keypress', (e)=> {
    if(e.key === 'Enter') {
        firebasetodo.addData();
    }
});
closeModal.addEventListener('click', () => {
    modal.classList.remove('open');
});
// modal.firstElementChild.childNodes[3].addEventListener('keypress', function (e) {
//     if (e.key === 'Enter') {
//       console.log('ok');
//     }
// });