import { User } from './user';
export type Reviews = {
    id: number;
    text: string;
    movieId: number;
    user: User;
  };