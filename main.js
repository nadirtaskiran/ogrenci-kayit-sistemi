
const studentForm = document.getElementById("studentForm");

studentForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("studentName").value;
    const number = document.getElementById("studentNumber").value;
    const department = document.getElementById("studentDepartment").value;

    console.log("Ad Soyad:", name);
    console.log("Öğrenci Numarası:", number);
    console.log("Bölüm:", department);
});
