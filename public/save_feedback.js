document.addEventListener('DOMContentLoaded', function () {
    var feedbackForm = document.getElementById('feedback-form');

    feedbackForm.addEventListener('submit', function (e) {
        e.preventDefault();

        var name = document.getElementById('name').value;
        var feedback = document.getElementById('feedback').value;

        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/submit-feedback', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        xhr.onreadystatechange = function () {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                // Handle successful submission here
                alert('Feedback submitted successfully!');
            }
        };

        xhr.send('name=' + encodeURIComponent(name) + '&feedback=' + encodeURIComponent(feedback));
    });
});
