function calculateCGPA() {
    const courses = document.querySelectorAll('.course');
    let totalCredits = 0;
    let totalGradePoints = 0;

    courses.forEach(course => {
        const gradeSelect = course.querySelector('select');
        const selectedGrade = parseFloat(gradeSelect.value);
        totalCredits += 1;
        totalGradePoints += selectedGrade;
    });

    const cgpa = (totalGradePoints / totalCredits).toFixed(2);
    document.getElementById('result').innerText = `Your CGPA: ${cgpa}`;
}

function resetFields() {
    const courseInputs = document.querySelectorAll('.course');
    courseInputs.forEach(input => {
        input.querySelector('input').value = '';
        input.querySelector('select').selectedIndex = 0;
    });
    document.getElementById('result').innerText = '';
}
