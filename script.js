let isEdit = false;
let usID;
function saveToLocalStorage(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const pno = event.target.pno.value;
    const obj = {
        name,
        email,
        pno
    }

    // localStorage.setItem(obj.email, JSON.stringify(obj));

    //Storing the data on cloud using axios on crudcrud.com

    if (isEdit) {
        axios.put(`https://crudcrud.com/api/00d8a256b45643a3b594e0ceb61e9bc7/bookapointment/${usID}`, obj)
            .then(() => {
                axios.get(`https://crudcrud.com/api/00d8a256b45643a3b594e0ceb61e9bc7/bookapointment/${usID}`)
                    .then((response) => {
                        showNewUserOnScreen(response.data);

                    })
                    .catch((err) => console.log(err));

            })
            .catch((error) => console.log(error));
    } else {
        axios.post("https://crudcrud.com/api/00d8a256b45643a3b594e0ceb61e9bc7/bookapointment", obj)
            .then((response) => showNewUserOnScreen(response.data))
            .catch((err) => console.log(err));
    }







    event.target.name.value = '';
    event.target.email.value = '';
    event.target.pno.value = '';
    isEdit = false;
}

window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/00d8a256b45643a3b594e0ceb61e9bc7/bookapointment")
        .then((response) => {
            response.data.forEach(element => {
                showNewUserOnScreen(element);
            });
        })
        .catch((err) => console.log(err));

})

function showNewUserOnScreen(user) {
    if (localStorage.getItem(user.email) !== null) {
        removeUserFromScreen(user.email);
    }
    const newname = user.name.split(" ");

    const parentNode = document.getElementById('ul-list');
    const childHtml = `<li id = ${user.email}> ${user.name} - ${user.email} - ${user.pno} 
    <button onClick=deleteUser('${user._id}','${user.email}') class="btn-del"> Delete </button> 
    <button onClick=editUser('${user.email}','${newname[0]}','${user.pno}','${user._id}') class="btn-edit"> Edit</button>
    </li> `
    parentNode.innerHTML = parentNode.innerHTML + childHtml;
}

function deleteUser(userID, email) {
    axios.delete(`https://crudcrud.com/api/00d8a256b45643a3b594e0ceb61e9bc7/bookapointment/${userID}`)
    removeUserFromScreen(email);
}
function removeUserFromScreen(email) {
    const parentNode = document.getElementById('ul-list');
    const childDelete = document.getElementById(email);
    if (childDelete) {
        parentNode.removeChild(childDelete);
    }
}
function editUser(email, name, pno, userID) {
    document.getElementById('email').value = email;
    document.getElementById('name').value = name;
    document.getElementById('pno').value = pno;
    removeUserFromScreen(email);
    isEdit = true;
    usID = userID;
}