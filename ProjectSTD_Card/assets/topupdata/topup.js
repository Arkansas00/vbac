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


const topupData = async () => {
    const studentId = document.getElementById('student_id').value;
    const topupAmount = document.querySelector('input[name="topup_amount"]').value;

    try {
        const response = await axios.put(`http://localhost:8000/students/${studentId}`, {
            balance: topupAmount
        });
        try {
            const response = await axios.get(`http://localhost:8000/students/${studentId}`);
            const student = response.data;
            const newBalance = student.balance;
            document.querySelector('input[name="new_balance"]').value = newBalance;
            alert('เติมเงินนักเรียนสำเร็จ');
        } catch (error) {
            console.error('Error updating balance:', error.message);
            alert('ไม่สามารถอัพเดทยอดเงินนักเรียนได้');
        }
    } catch (error) {
        console.error('Error topping up student:', error.message);
        alert('ไม่สามารถเติมเงินนักเรียนได้');
    }
}

const topupData2 = async () => {
    const studentId = document.getElementById('student_id').value;
    const topupAmount = parseFloat(document.querySelector('input[name="topup_amount"]').value);

    try{
        const response = await axios.get(`http://localhost:8000/students/${studentId}`);
            const student = response.data;
            const oldBalance = student.balance;
            const newBalance = (oldBalance + topupAmount);

            try {
                const response = await axios.put(`http://localhost:8000/students/${studentId}`, {
                    balance: newBalance
                });
                alert('เติมเงินนักเรียนสำเร็จ');
                document.querySelector('input[name="new_balance"]').value = newBalance;
            } catch (error) {
                console.error('Error updating balance:', error.message);
                alert('ไม่สามารถอัพเดทยอดเงินนักเรียนได้');
            }
    }
    catch (error) {
        console.error('Error fetching student:', error.message);
        alert('ไม่สามารถเติมเงินได้');
        return;
    }
}