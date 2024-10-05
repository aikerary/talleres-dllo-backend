import { Request, Response } from 'express';
import { getByHobbyAction } from '../actions/getByHobby.user.action';
import { existsUserAction } from '../actions/exists.user.action';
import { getTeamExperienceAction } from '../actions/getTeamExperience.user.action';
import { getByFactionAction } from '../actions/getByFaction.user.action';
import { createUserAction } from '../actions/create.user.action';
import { User } from '../models/user.model';

export class UserController {
    getByHobby(req: Request, res: Response) {
        const { hobby } = req.query;
        
        if (!hobby || typeof hobby !== 'string') {
            return res.status(400).json({ message: 'Hobby is required and must be a string' });
        }

        const users = getByHobbyAction(hobby);
        return res.json(users);
    }

    checkExists(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        
        if (isNaN(id)) {
            return res.status(400).json({ message: 'Valid ID is required' });
        }

        const exists = existsUserAction(id);
        return res.json({ exists });
    }

    getTeamExperience(req: Request, res: Response) {
        const { team } = req.params;
        
        if (!team) {
            return res.status(400).json({ message: 'Team is required' });
        }

        const experience = getTeamExperienceAction(team);
        return res.json({ team, totalExperience: experience });
    }

    getByFaction(req: Request, res: Response) {
        const { faction } = req.params;
        
        if (!faction) {
            return res.status(400).json({ message: 'Faction is required' });
        }

        const users = getByFactionAction(faction);
        return res.json(users);
    }

    createUser(req: Request, res: Response) {
        const userData: Omit<User, 'id'> = req.body;
        
        // Validación básica
        if (!userData.name || !userData.hobbies || !userData.team || !userData.faction) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        const newUser = createUserAction(userData);
        return res.status(201).json(newUser);
    }
}