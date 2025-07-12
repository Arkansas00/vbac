const loadData = async () => {
    const studentId = document.getElementById('student_id').value;
    try {
        const response = await axios.get(`http://localhost:8000/students/${studentId}`);
        const student = response.data;
        console.log(student);
        document.querySelector('input[name="student_id"]').value = student.student_id;
        document.querySelector('input[name="full_name"]').value = student.full_name;
        document.querySelector('input[name="card_number"]').value = student.card_number;
        document.querySelector('input[name="balance"]').value = student.balance;
    } catch (error) {
        console.error('Error fetching student:', error.message);
        alert('ไม่พบข้อมูลนักเรียน');
    }
}

const delData = async () => {
    const studentId = document.getElementById('student_id').value;
    try {
        const response = await axios.delete(`http://localhost:8000/students/${studentId}`);
        console.log(response.data);
        alert('ลบข้อมูลนักเรียนสำเร็จ');
        // Clear the input fields after deletion
        document.querySelector('input[name="student_id"]').value = '';
        document.querySelector('input[name="full_name"]').value = '';
        document.querySelector('input[name="card_number"]').value = '';
        document.querySelector('input[name="balance"]').value = '';
    } catch (error) {
        console.error('Error deleting student:', error.message);
        alert('ไม่สามารถลบข้อมูลนักเรียนได้');
    }
}