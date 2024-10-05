import { Router } from 'express';
import { UserController } from '../controllers/user.controller';

const router = Router();
const userController = new UserController();

// Ruta para obtener usuarios por hobby
router.get('/hobby', userController.getByHobby);

// Ruta para verificar si existe un usuario
router.get('/exists/:id', userController.checkExists);

// Ruta para obtener la experiencia total del equipo
router.get('/team-experience/:team', userController.getTeamExperience);

// Ruta para obtener usuarios por facción
router.get('/by-faction/:faction', userController.getByFaction);

// Ruta para crear un nuevo usuario
router.post('/', userController.createUser);

export default router;