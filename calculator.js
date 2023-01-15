
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('', (req, res) => {
    let num1 = Number(req.body.n1);
    let num2 = Number(req.body.n2);
    let result = num1 + num2;

    res.send('The result of the calculation is ' + result);
});

app.get('/bmicalculator', (req, res) => {
    res.sendFile(__dirname + '/bmiCalculator.html');
});
app.post('/bmicalculator', (req, res) => {
    let w = parseFloat(req.body.weight);
    let h = parseFloat(req.body.height);
    let bmi = w / (h * h);

    res.send('Your BMI is ' + bmi);
})

app.listen(port, () => {
    console.log('Server is running on port ' + port);
});