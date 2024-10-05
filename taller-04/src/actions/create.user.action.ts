import { User } from '../models/user.model';
import { users } from '../data/users.data';

export const createUserAction = (newUser: Omit<User, 'id'>): User => {
    // Encuentra el ID más alto actual y suma 1
    const newId = Math.max(...users.map(user => user.id)) + 1;
    
    const userToAdd: User = {
        id: newId,
        ...newUser
    };
    
    users.push(userToAdd);
    return userToAdd;
};
