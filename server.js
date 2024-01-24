const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://teamsmitherynsmongodb:8f8jreQr1bOv05EvIFJvlEwYt31Yqk7NoisGmv2KpNEpYeMVcZegswqfBOQhgHTgzPZcPaZA667pACDbwWLh2g==@teamsmitherynsmongodb.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&replicaSet=globaldb&maxIdleTimeMS=120000&appName=@teamsmitherynsmongodb@', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const feedbackSchema = new mongoose.Schema({
    name: String,
    feedback: String,
    createdAt: { type: Date, default: Date.now }
});
const Feedback = mongoose.model('Feedback', feedbackSchema);

app.post('/submit-feedback', (req, res) => {
    const newFeedback = new Feedback({
        name: req.body.name,
        feedback: req.body.feedback
    });

    newFeedback.save()
        .then(() => res.send('Feedback submitted successfully'))
        .catch(err => res.status(500).send('Failed to save feedback'));
});

app.get('/get-feedback', (req, res) => {
    Feedback.find({})
        .then(feedbacks => res.send(feedbacks))
        .catch(err => res.status(500).send(err));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
