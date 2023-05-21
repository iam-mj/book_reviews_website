window.onload = start;
function start() {
    const btn = document.getElementById("books_btn");
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        window.location.href = "books.html";
    })
}