import { TrendingPeriod } from "@/types/movie";

export const tmdbEndpoints = {
  SEARCH_MOVIE: (query: string) =>
    `/search/movie?query=${encodeURIComponent(query)}`,

  DISCOVER_MOVIES: "/discover/movie?sort_by=popularity.desc",

  TRENDING_MOVIES: (timeWindow: TrendingPeriod = "week") =>
    `/trending/movie/${timeWindow}`,

  MOVIE_DETAILS: (id: string) => `/movie/${id}`,
} as const;
