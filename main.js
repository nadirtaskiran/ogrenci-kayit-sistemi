
let students = JSON.parse(localStorage.getItem("students")) || [];

const studentForm = document.getElementById("studentForm");
const studentTableBody = document.getElementById("studentTableBody");

function renderStudents() {
    studentTableBody.innerHTML = "";

    
    if (students.length === 0) {
        const emptyRow = document.createElement("tr");
        const emptyCell = document.createElement("td");

        emptyCell.colSpan = 4;
        emptyCell.textContent = "Henüz kayıtlı öğrenci bulunmuyor.";
        emptyCell.style.textAlign = "center";

        emptyRow.appendChild(emptyCell);
        studentTableBody.appendChild(emptyRow);

        return;
    }


    students.forEach(function(student, index) {
        const newRow = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = student.name;

        const numberCell = document.createElement("td");
        numberCell.textContent = student.number;

        const departmentCell = document.createElement("td");
        departmentCell.textContent = student.department;

        const actionCell = document.createElement("td");
        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Sil";

        deleteButton.addEventListener("click", function() {
            deleteStudent(index);
        });

        actionCell.appendChild(deleteButton);

        newRow.appendChild(nameCell);
        newRow.appendChild(numberCell);
        newRow.appendChild(departmentCell);
        newRow.appendChild(actionCell);

        studentTableBody.appendChild(newRow);
    });
}


studentForm.addEventListener("submit", function(event) {
    event.preventDefault();


const name = document.getElementById("studentName").value.trim();
const number = document.getElementById("studentNumber").value.trim();
const department = document.getElementById("studentDepartment").value.trim();

if (!name || !number || !department) {
    alert("Lütfen tüm alanları doğru şekilde doldurun!");
    return;
}


const alreadyExists = students.some(function(student) {
    return student.number === number;
});

if (alreadyExists) {
    alert("Bu öğrenci numarası zaten kayıtlı!");
    return;
}

    const student = {
        name: name,
        number: number,
        department: department
    };

    students.push(student);

    localStorage.setItem("students", JSON.stringify(students));

    renderStudents();
    studentForm.reset();
});


function deleteStudent(index) {
    students.splice(index, 1);

    localStorage.setItem("students", JSON.stringify(students));

    renderStudents();
}


renderStudents();
