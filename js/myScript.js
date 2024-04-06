// Prompts the user to enter their name when the window loads. If a name is entered, that name is added to the site copy, welcoming the user to the site. If no name is entered, no changes are made to the welcome text.

window.addEventListener("load", function () {
    let welcome = prompt("What's your name?");
    if (welcome) {
        document.querySelector("#welcome").innerHTML = ` ${welcome}`;
    }
    else {
        document.querySelector("#welcome").innerHTML = "";
    }
})