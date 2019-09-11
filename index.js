const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 8000
const User = require('./models/User')
const UserSession = require('./models/UserSession')
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user')


app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true
  })
)
app.use(bodyParser.json())

const mongo_uri = 'mongodb://localhost/react-auth';

mongoose.connect('mongodb+srv://Riku:dbPassword@cluster0-y3n9p.mongodb.net/test?retryWrites=true&w=majority', (err) => {
if (err){
  throw err;
} else {
  console.log(`Succesfully connected to ${mongo_uri}`)
}
})


app.get('/api/home', (req, res) => res.json({message: 'Welcome'}))

app.get('/api/secret', (req, res) => res.send('Potato'))
/*
app.post('/api/register', (req, res) => {
  console.log('REQUEST : ', req.body)
  const { email, password } = req.body;
  const user = new User({ email, password });
  user.save((err) => {
    if (err) {
      res.status(500)
        .send("Error registering new user please try again.");
    } else {
      res.status(200).send("Welcome to the club!");
    }
  })
})*/
// POST route to register a user

app.use('/api/account', authRoutes);
app.use('/api/account', userRoutes);

console.log(app.routes)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))