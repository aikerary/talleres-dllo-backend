import express from 'express';
import userRoutes from './routes/user.routes';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(express.json());

// Habilitar CORS
app.use(cors());

// Usar las rutas de usuario bajo el prefijo /users
app.use('/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});