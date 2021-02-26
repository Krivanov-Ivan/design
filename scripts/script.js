function De() {
    let burger = document.querySelector('.burger');
    let line_1 = document.querySelector('.line1');
    let line_3 = document.querySelector('.line3');
    let menu = document.querySelector('.menu');
    let menu_link = document.querySelectorAll('.menu-link');
    let body = document.querySelector('body');
    let buttons = document.querySelectorAll('button');
    let scrolledSlides = 0;
    let slider = document.querySelector('.slider');
    let counter = 1;
    //responsible navbar
    if (body.clientWidth < 1200) {
        burger.addEventListener('click', ()=>{
            menu.classList.toggle('menu-active');
            line_1.classList.toggle('line1-active');
            line_3.classList.toggle('line3-active');
            body.classList.toggle('overflowy');
        });
        menu_link.forEach(link => {
            link.addEventListener('click', ()=>{
                menu.classList.toggle('menu-active');
                line_1.classList.toggle('line1-active');
                line_3.classList.toggle('line3-active');
                body.classList.toggle('overflowy');
            });
        });
    };
    //slider
    buttons.forEach(button => {
        button.addEventListener('click', ()=>{
            scrolledSlides += (counter - button.id)*25;
            console.log(scrolledSlides);
            slider.style.transform = `translateX(${scrolledSlides}%)`;
            slider.style.transition = 'transform 1s ease-out';
            counter = button.id;
        });
    });
}

De();