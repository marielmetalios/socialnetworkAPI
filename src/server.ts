import express from 'express';
import routes from './routes/index.js'



const app = express();
const PORT  = 3000;

app.use(express.json())

// app.get('/', (_req, res) => {
//     res.send('Testing!');
// });

app.listen(PORT, () => {
    console.log(`New server running here: http://localhost:${PORT}`)
})