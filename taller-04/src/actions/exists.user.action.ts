import { User } from '../models/user.model';
import { users } from '../data/users.data';

export const existsUserAction = (id: number): boolean => {
    return users.some(user => user.id === id);
};