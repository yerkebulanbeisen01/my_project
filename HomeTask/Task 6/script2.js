document.getElementById("i1").addEventListener('onclick', changeImg("i1"));
document.getElementById("i2").addEventListener('onclick', changeImg("i2"));
document.getElementById("i3").addEventListener('onclick', changeImg("i3"));
document.getElementById("i4").addEventListener('onclick', changeImg("i4"));
document.getElementById("i5").addEventListener('onclick', changeImg("i5"));

function changeImg(imgID) {
    let imgSRC = document.getElementById(imgID).src;
    document.getElementById("i1").innerHTML = imgSRC;
    document.getElementById("BigImage").src = imgSRC;
    let img = document.getElementById('bigImage');
    img.setAttribute('src', imgSRC);
}