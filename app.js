const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/userModel');

const app = express();
const port = 3000;

//connect to MongoDB through mongoose
mongoose.connect('mongodb://127.0.0.1:27017/Asessment', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
});

//middleware to log timestamp and requested endpoint for each incoming request
const timer = (req, res, next) => {
    console.log(`Request at ${new Date()} for endpoint ${req.url}`);
    next(); // pass control to the next middleware function in the stack
}

app.use(timer);


app.get('/', (req, res)=> {
    res.send('Hello,world');
});

//api endpoint to check server health
app.get('/api/health', (req, res) => {
    res.json({'message': 'Server is healthy'});
});

//CRUD OPERATIONS FOR USERS
// Get all users
app.get('/getUsers', async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      console.error('Error fetching users:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Get user by ID
app.get('/users/:id', async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      res.json(user);
    } catch (error) {
      console.error('Error fetching user:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

//Create user
app.post('/createUser', async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.json(newUser);
  } catch (error) {
    console.error('Error creating user:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update user by ID
app.put('/users/:id', async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedUser);
    } catch (error) {
      console.error('Error updating user:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});
  
// Delete user by ID
app.delete('/users/:id', async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error('Error deleting user:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


