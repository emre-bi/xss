function updateTeacherEmail(email) {
    fetch('https://teach.classdojo.com/api/session')
      .then(response => response.json())
      .then(data => {
        var teacherId = data.teacher._id;
        fetch('https://teach.classdojo.com/api/teacher/' + teacherId, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            _id: teacherId,
            title: 'a',
            firstName: 'a',
            lastName: 'a',
            emailAddress: email
          })
        });
      });
}
