import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/users.js' //import user routes from user.js

const app = express();
const PORT = 5000

app.use(bodyParser.json());

app.use('/users', userRoutes);
//define API routes using the app.get(), app.use methods
app.get('/', (req, res) => {res.send('HELLO FROM HOMEPAGE')})

// app.get('/', (req, res));

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
