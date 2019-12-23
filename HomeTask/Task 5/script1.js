function det3x3() {
    var a = document.getElementById("s11").value;
    var b = document.getElementById("s12").value;
    var c = document.getElementById("s13").value;
    var d = document.getElementById("s21").value;
    var e = document.getElementById("s22").value;
    var f = document.getElementById("s23").value;
    var g = document.getElementById("s31").value;
    var h = document.getElementById("s32").value;
    var i = document.getElementById("s33").value;
    var d =
        a * e * i + b * f * g + c * d * h - c * e * g - b * d * i - a * f * h;
    var definition =
        "Definition: Using this formula |A| = A(EI − FH) − B(DI − FG) + C(DH−EG)";
    if (d != "NaN") {
        document.getElementById("result").innerHTML =
            "User input was incorrect. Please try again!";
    }
    if (d < 0 || d == 0 || d > 0) {
        det = definition + "\nΔ=" + d.toString();
        document.getElementById("result").innerHTML = det;
    }
}
document.getElementById("determinant").addEventListener("click", det3x3);

function beforeclick() {
    document.getElementById("s11").value = "A";
    document.getElementById("s12").value = "B";
    document.getElementById("s13").value = "C";
    document.getElementById("s21").value = "D";
    document.getElementById("s22").value = "E";
    document.getElementById("s23").value = "F";
    document.getElementById("s31").value = "G";
    document.getElementById("s32").value = "H";
    document.getElementById("s33").value = "I";
}
beforeclick();
