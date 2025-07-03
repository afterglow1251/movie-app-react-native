import { Movie, MovieDetails } from "@/types/movie";
import { axios } from "./config/axiosInstance";
import { tmdbEndpoints } from "./constants/endpoints.const";
import { handleApiError } from "./utils/errors.util";
import { TrendingPeriod } from "@/types/movie";

export class MovieService {
  static async getMovies({ query }: { query: string }): Promise<Movie[]> {
    try {
      const endpoint = query
        ? tmdbEndpoints.SEARCH_MOVIE(query)
        : tmdbEndpoints.DISCOVER_MOVIES;
      const { data } = await axios.get(endpoint);
      return data.results;
    } catch (error) {
      return handleApiError(error);
    }
  }

  static async getMovieDetails(movieId: string): Promise<MovieDetails> {
    try {
      const endpoint = tmdbEndpoints.MOVIE_DETAILS(movieId);
      const { data } = await axios.get(endpoint);
      return data;
    } catch (error) {
      return handleApiError(error);
    }
  }

  static async getTrending(
    timeWindow: TrendingPeriod = "week"
  ): Promise<Movie[]> {
    try {
      const endpoint = tmdbEndpoints.TRENDING_MOVIES(timeWindow);
      const { data } = await axios.get(endpoint);
      return data.results;
    } catch (error) {
      return handleApiError(error);
    }
  }
}
