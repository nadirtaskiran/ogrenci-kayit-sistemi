let students = [];
const studentForm = document.getElementById("studentForm");
const studentTableBody = document.getElementById("studentTableBody");

studentForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("studentName").value;
    const number = document.getElementById("studentNumber").value;
    const department = document.getElementById("studentDepartment").value;

    const newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td>${name}</td>
        <td>${number}</td>
        <td>${department}</td>
    `;

    studentTableBody.appendChild(newRow);
    
    const student = {
        name: name,
        number: number,
        department: department
    };

    students.push(student);

    localStorage.setItem("students", JSON.stringify(students));


    studentForm.reset();
});
