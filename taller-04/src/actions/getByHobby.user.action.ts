import { User } from '../models/user.model';
import { users } from '../data/users.data';

export const getByHobbyAction = (hobby: string): User[] => {
    return users.filter(user => 
        user.hobbies.includes(hobby)
    );
};