const loadData = async () => {
    const studentId = document.getElementById('student_id').value;
    try {
        const response = await axios.get(`http://localhost:8000/students/${studentId}`);
        const student = response.data;
        console.log(student);
        document.querySelector('.result-input[name="student_id"]').value = student.student_id;
        document.querySelector('.result-input[name="full_name"]').value = student.full_name;
        document.querySelector('.result-input[name="card_number"]').value = student.card_number;
        document.querySelector('.result-input[name="balance"]').value = student.balance;
    } catch (error) {
        console.error('Error fetching student:', error.message);
        alert('ไม่พบข้อมูลนักเรียน');
    }
}
