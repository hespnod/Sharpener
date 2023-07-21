let form = document.getElementById('inp-form');
form.addEventListener('submit', addform);

function addform(e) {
    e.preventDefault();
    let myobj = {
        name: e.target[0].value,
        email: e.target[1].value
    };
    let myobj_serialised = JSON.stringify(myobj);
    localStorage.setItem("myobj", myobj_serialised);

}
