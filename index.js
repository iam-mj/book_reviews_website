window.onload = start;
function start() {
    createFooter();
    const btn = document.querySelector("section > button");
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        window.location.href = "books.html";
    })
}
function createFooter() {
    const main = document.getElementsByClassName('background_img')[0];
    const pos = main.getBoundingClientRect();
    const footer = document.createElement('aside');
    footer.classList.add('footer');
    footer.style.top = pos.bottom + 'px';
    console.log(pos.bottom);
    main.parentNode.appendChild(footer);
}