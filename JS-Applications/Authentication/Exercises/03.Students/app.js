async function loadAllStudents() {
    // load all students -> requset to http://localhost:3030/jsonstore/collections/students
    const responce = await fetch('http://localhost:3030/jsonstore/collections/students')
    if (!responce.ok) {
        const err = await responce.json();
        alert(err.message);
        throw new Error(err.message);
    }
    const data = await responce.json();
    const resultsTable = document.getElementById('results');
    
    const result = Object.values(data).map(s => createRow(s)).join('');
    resultsTable.innerHTML = result;

}

function createRow(student) {
    return `
    <tr>
        <th>${student.firstName}</th>
        <th>${student.lastName}</th>
        <th>${student.facultyNumber}</th>
        <th>${student.grade}</th>
    </tr>`
}

//post requset to server
//load data 
async function createStudent() {
    //get data from the form
    const responce = await fetch('http://localhost:3030/jsonstore/collections/students')

    if (!responce.ok) {
        const err = await responce.json();
        alert(err.message);
        throw new Error(err.message);
    }
    const data = await responce.json();
}

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const facultyNumber = formData.get('facultyNumber');
    const grade = formData.get('grade');

})