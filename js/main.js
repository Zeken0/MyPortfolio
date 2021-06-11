const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('header nav ul li');
const header = document.querySelector('header');

window.addEventListener('scroll', ()=> {
    let current = '';

    sections.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= (sectionTop - sectionHeight / 9.5)) {
            current = section.getAttribute('id');
        }
    })
console.log(current);
    navLi.forEach( li => {
        li.classList.remove('active')
        header.classList.remove('headerShow')
        if(li.classList.contains(current)){
            li.classList.add('active')
            header.classList.add('headerShow')
        }
    })
})