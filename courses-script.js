// Simple function to enroll in a course
function enrollCourse(courseName) {
    alert('Successfully enrolled in ' + courseName + '!');
}

// Simple logout function
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        window.location.href = 'index.html';
    }
}
