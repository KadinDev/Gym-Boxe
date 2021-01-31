function menuToogle(){
    const menuToogle = document.querySelector('.toogle')
    const glass = document.querySelector('.glass')
    const links = document.querySelector('.menu')
    const boxCenter = document.querySelector('.boxCenter h1')
    const ul = document.querySelector('ul')

    menuToogle.classList.toggle('active')
    glass.classList.toggle('active')
    links.classList.toggle('active')
    boxCenter.classList.toggle('active')
    ul.classList.toggle('active')
    
}