import { User } from './user';

export type Product = {
    id: number;
    text: string;
    movieId: string;
    user: User [];
}