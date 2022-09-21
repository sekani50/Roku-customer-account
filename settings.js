// JavaScript source code
let dash = document.getElementById("dash-toggle");

document.getElementById("menu").addEventListener('click', function () {

    if (dash.style.display == "none") {

        menuBlck();
    }
    else {
        menuNone();
    }


})

function menuBlck() {
    dash.style.display = "block";
}

function menuNone() {
    dash.style.display = "none";
}

//2

/*document.getElementById("dash-toggle").addEventListener('mouseout', function () {

    dash.style.display = "none";
}) */

document.getElementById("im-icon").addEventListener('mouseout', function () {

    dash.style.display = "none";
})


