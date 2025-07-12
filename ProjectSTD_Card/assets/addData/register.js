const submitData = async () => {
  const student_id = document.querySelector('input[name="student_id"]').value;
  const student_name = document.querySelector('input[name="full_name"]').value;
  const student_card = document.querySelector('input[name="card_number"]').value;
  const student_balance = document.querySelector('input[name="balance"]').value;

  const studentData = {
    student_id,
    full_name: student_name,
    card_number: student_card,
    balance: student_balance
  };

  console.log(studentData);

  try {
    const response = await axios.post('http://localhost:8000/students', studentData);
    console.log('response data', response.data);
    window.location.href = 'AddStd.html';
    alert('บันทึกข้อมูลสำเร็จ');
  } catch (error) {
    console.error('Error submitting data:', error.message);
  }
};

