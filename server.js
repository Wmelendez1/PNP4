const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/TeamSmitherynsDB');

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// feedback schema and model
const feedbackSchema = new mongoose.Schema({
    name: String,
    feedback: String,
    createdAt: { type: Date, default: Date.now }
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

// POST route for submitting feedback
app.post('/submit-feedback', async (req, res) => {
    const newFeedback = new Feedback({
        name: req.body.name,
        feedback: req.body.feedback
    });

    try {
        await newFeedback.save();
        res.send('Feedback submitted successfully');
    } catch (err) {
        res.status(500).send('Failed to save feedback');
    }
});

// GET route for retrieving feedback
app.get('/get-feedback', (req, res) => {
    Feedback.find({}).then(feedbacks => {
        res.send(feedbacks);
    }).catch(err => {
        res.status(500).send(err);
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
