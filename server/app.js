import express from 'express';
import route from './Routes/route.js';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(route);

const PORT = 3000;
app.listen(PORT, () => console.log("server running on port 3000"));