let form = document.getElementById('inp-form');
form.addEventListener('submit', addform);
let ul = document.getElementById('ul-list')
ul.addEventListener('click', remove);


function addform(e) {
    e.preventDefault();
    let myobj = {
        name: e.target[0].value,
        email: e.target[1].value,
        phone: e.target[2].value
    };
    let myobj_string = JSON.stringify(myobj);
    localStorage.setItem(`${myobj.email}`, myobj_string);
    let textNode = document.createTextNode(`Name: ${myobj.name} Email: ${myobj.email} Phone: ${myobj.phone}`)
    let li = document.createElement('li');
    li.appendChild(textNode);
    let btn = document.createElement('button');
    btn.innerText = 'Delete';
    btn.className = 'btn-del';
    li.appendChild(btn);
    ul.appendChild(li);
    console.log(btn.parentElement);
    e.target[0].value = ''
    e.target[1].value = ''
    e.target[2].value = ''
}

function remove(e) {
    if (e.target.classList.contains('btn-del')) {
        ul.removeChild(e.target.parentElement);
    }
}