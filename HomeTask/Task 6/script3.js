document.getElementById('addStudent').onclick = function() {

    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let faculty = document.getElementById("faculty").value;
    let table = document.getElementById('students');
    let row = table.insertRow(3);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    cell1.innerHTML = name;
    cell2.innerHTML = surname;
    cell3.innerHTML = faculty;
}