const button = document.getElementsByTagName("button");
const p = document.getElementsByTagName("p");
button[0].addEventListener("click", updateJoke);

function updateJoke() {
    fetch("https://api.chucknorris.io/jokes/random")
        .then((response) => {
            return (response.json());
        }).then((response) => {
            p[0].innerText = response.value;
        })
}

window.addEventListener("load", updateJoke);