const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors =  require('cors');

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/submit-feedback', (req, res) => {
    const name = req.body.name;
    const feedback = req.body.feedback;

    console.log('Feedback recieved: ', name, feedback);

    res.send('Feedback submitted successfully');
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
