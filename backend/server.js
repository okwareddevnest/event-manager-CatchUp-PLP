const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000
dotenv.config()
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/events', require('./routes/eventRoutes'));


app.listen(PORT, ()=> console.log(`Server running via http://localhost:${PORT}`)) 