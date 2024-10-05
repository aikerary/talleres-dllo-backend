import { User } from '../models/user.model';
import { users } from '../data/users.data';

export const getByFactionAction = (faction: string): User[] => {
    return users.filter(user => user.faction === faction);
};
