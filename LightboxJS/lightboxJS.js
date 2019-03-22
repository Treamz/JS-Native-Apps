class lightboxJS {
    constructor() {
        this.elems = document.querySelectorAll('[data-lighbox]');
    }
    start() {
        for(let i = 0; i < this.elems.length; i++) {
            this.elems[i].addEventListener('click', () => {
                this.createModal(this.elems[i]);
            });
        }
    }
    createModal(elem) {
        console.log(elem);
        let modalWrapper = document.createElement('div');
        modalWrapper.classList.add('modalWrapper');
        let modal = document.createElement('div');
        modal.classList.add('modal');
        let closeBtn = document.createElement('div');
        closeBtn.classList.add('closeModal');
        closeBtn.innerHTML = '<span></span>'
        closeBtn.addEventListener('click', this.deleteModal);
        modal.appendChild(closeBtn);
        let modalImg = document.createElement('img');
        modalImg.src = elem.getAttribute('data-lighbox');
        modal.appendChild(modalImg);
        modalWrapper.appendChild(modal);
        
        console.log(elem.getAttribute('data-lighbox'))
        document.body.appendChild(modalWrapper);
        setTimeout(()=> {
            modalWrapper.classList.add('open')
        },300);

    }
    deleteModal() {
        let modal = document.querySelector('.modalWrapper');
        modal.classList.add('close');
        setTimeout(()=> {
            modal.remove()
        },300);
    }
}

let lighboxjs = new lightboxJS();
lighboxjs.start();