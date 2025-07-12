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


const editData = async () => {
    const studentId = document.getElementById('student_id').value;
    const fullName = document.querySelector('input[name="full_name"]').value;
    const cardNumber = document.querySelector('input[name="card_number"]').value;
    const balance = document.querySelector('input[name="balance"]').value;

    try {
        const response = await axios.put(`http://localhost:8000/students/${studentId}`, {
            full_name: fullName,
            card_number: cardNumber,
            balance: balance
        });
        console.log(response.data);
        alert('บันทึกข้อมูลนักเรียนสำเร็จ');
    } catch (error) {
        console.error('Error updating student:', error.message);
        alert('ไม่สามารถบันทึกข้อมูลนักเรียนได้');
    }
}