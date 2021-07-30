document.querySelector('button').addEventListener('click',() => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/student", true);
    xhr.onload = function() {
        console.log(xhr.responseText);
    }
xhr.send()
});