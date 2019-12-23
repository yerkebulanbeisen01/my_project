var slider_content = document.getElementById("box");

var image = ["a", "b", "c", "d"];

var i = image.length;
var c = 1;
var res = 1;
var reset = "0px 10px 15px 0px rgb(235, 50, 219)";
function nextImage() {
    if (i < image.length) {
        i++;
    } else {
        i = 1;
    }
    document.getElementById("box").innerHTML =
        "<img src=" + image[i - 1] + ".jpg>";
}

function prewImage() {
    if (i < image.length + 1 && i > 1) {
        i = i - 1;
    } else {
        i = image.length;
    }
    document.getElementById("box").innerHTML =
        "<img src=" + image[i - 1] + ".jpg>";
}
