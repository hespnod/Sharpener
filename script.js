let para = document.querySelectorAll('p');
let i = 0;
para.forEach(Element => {
    if (i == 1) {
        Element.innerHTML = "<h1>Welcome Coders</h1>";
        Element.style = "color:red";
    }
    i++;
})