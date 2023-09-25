gsap.from('.info-text', 1, { opacity: 0, y: -300, delay: 0 });
gsap.from('.nuvem', 1, { opacity: 0, y: 300, delay: 0.5 });
gsap.from('.planeta', 1, { opacity: 0, y: -300, delay: 0.3 });
gsap.from('.foguete', 1, { opacity: 0, y: 300, delay: 0.3 });
gsap.from('.pontos', 1, { opacity: 0, x: 300, delay: 0.3 });

function mobile_menu() {

    const menuHamburguer = document.querySelector('.mobile-menu');
    const linksHeader = document.querySelector('.links-header');

    menuHamburguer.classList.toggle('effect');
    linksHeader.classList.toggle('effect');

}