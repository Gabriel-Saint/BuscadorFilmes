import { IMovie } from "./movie.interface";

export interface IMovieResponse {
    Search: IMovie[];
    totalResults: string;
    Response: boolean;
    Error?: string;
}