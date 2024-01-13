const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors =  require('cors');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/TeamSmitherynsDB', {useNewUrlParser: true, useUnifiedTopology: true});
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/submit-feedback', (req, res) => {
    const newFeedback = new Feedback({
        name: req.body.name,
        feedback: req.body.feedback
    });

    newFeedback.save()
        .then(() => {
            res.send('Feedback submitted successfully');
        })
        .catch(err => {
            res.send('Failed to save feedback');
        });
});

const feedbackSchema = new mongoose.Schema({
    name: String,
    feedback: String,
    createdAt: { type: Date, default: Date.now }
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

app.get('/get-feedback', (req, res) => {
    Feedback.find({})
        .then(feedbacks => {
            res.send(feedbacks);
        })
        .catch(err => {
            res.status(500).send(err);
        });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));