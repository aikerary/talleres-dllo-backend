import { User } from '../models/user.model';
import { users } from '../data/users.data';

export const getTeamExperienceAction = (team: string): number => {
    return users
        .filter(user => user.team === team)
        .reduce((total, user) => total + user.years, 0);
};
