import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/index.js';

// this is the ENTRY point of our app.
// It initializes express (for web server)
// Connects us to MongoDB
// Sets up our starting API routes.

const app = express();
const PORT  = 3000;

// middleware tells Express to  parse JSON automatically from incoming requests.
app.use(express.json());
app.use(routes);

// app.get('/', (_req, res) => {
//     res.send('Testing!');
// });

//ODM - 
mongoose
    .connect('mongodb://127.0.0.1:27017/socialDB')
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((err) => console.error(err));