function loadFeedback() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/get-feedback', true);

    xhr.onload = function () {
        if (this.status === 200) {
            var feedbacks = JSON.parse(this.responseText);
            var output = '';

            feedbacks.forEach(function(feedback) {
                
                var date = new Date(feedback.createdAt);
                var formattedDate = date.toLocaleDateString("en-US") + ' ' + date.toLocaleTimeString("en-US");

                output += `
                <div class="review-card">
                    <div class="feedback-top">
                        <h4 class="feedbacker-name">${feedback.name}</h4>
                        <span class="datetime">${formattedDate}</span>
                    </div>
                    <div class="feedback-feedback">
                        <p>${feedback.feedback}</p>
                    </div>
                </div>`;
            });

            document.getElementById('feedback-container').innerHTML = output;
        }
    };

    xhr.send();
}

document.addEventListener('DOMContentLoaded', loadFeedback);
