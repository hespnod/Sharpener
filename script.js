let form = document.getElementById('inp-form');
form.addEventListener('submit', addform);

function addform(e) {
    e.preventDefault();
    localStorage.setItem("name", e.target[0].value);
    localStorage.setItem("email", e.target[1].value);
}
