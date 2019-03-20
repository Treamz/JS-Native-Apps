

class tCarousel {
    constructor(params) {
        this.slider = document.getElementById(params.slider);
        this.slides = this.slider.querySelectorAll('.tItem');
        this.controls = this.slider.querySelector('.controls');
        this.currentSlide = ()=> {
            return this.slider.querySelector('.active');
        };
        this.prevSlide = 0;
    }
    execute() {
        console.log(this.slides);
        this.controls.lastElementChild.addEventListener('click',() => {
            this.next();
            console.log('next')
        });
        this.controls.firstElementChild.addEventListener('click',() => {
            this.prev();
        });
    }
    next() {
        if(this.currentSlide().nextElementSibling != null) {
            this.currentSlide().classList.add('out');
        this.currentSlide().addEventListener( 'webkitTransitionEnd',() => { 
            this.currentSlide().previousElementSibling.classList.remove('out');
           }, false );
  
        this.currentSlide().nextElementSibling.classList.add('active');
        this.currentSlide().classList.remove('active');
        }
        
        
       
         
    }
    prev() {
        console.log('current',this.currentSlide());
        console.log('previous',this.currentSlide().previousElementSibling);
        this.currentSlide().previousElementSibling.classList.add('active');
    }
}

let carousel = new tCarousel({
    slider: 'tCarousel'
});
carousel.execute();

// class tCarousel {
//     constructor(params) {
//         console.log(params)
//         this.sliderId = document.getElementById(params.slider);
//         this.currentSlide = () => {
//             return document.querySelector('.active');
//         }
//         this.controls = document.querySelector('.controls');
//     }
//     execute() {
//         console.log(this.controls);
//         console.log('Executed');
//         this.sliderId.firstElementChild.classList.add('active')
//         console.log(this.sliderId.children);
//         this.controls.lastElementChild.addEventListener('click',() => {
//             this.nextSlide();
//             console.log('Next Slide');
//         });
//     }
//     nextSlide() {
//         console.log(this.currentSlide());
//         if(this.currentSlide().nextElementSibling.classList.contains('tItem')) {
//             this.currentSlide().classList.add('out');
//             this.currentSlide().nextElementSibling.classList.add('active');
           
//             setTimeout(() => {
//                 this.currentSlide().classList.remove('out');
//                 this.currentSlide().classList.remove('active');
//             }, 400);
//         }
//         else {
//             console.log('null sibling')
//             this.currentSlide().classList.remove('active');
//             this.sliderId.firstElementChild.classList.add('active');
//         }
       
//     }
// }

// let carousel = new tCarousel({
//     slider: 'tCarousel'
// });
// carousel.execute();