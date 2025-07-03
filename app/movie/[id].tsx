import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { MovieService } from "@/services/tmdb/api";
import FeatherIcon from "react-native-vector-icons/Feather";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { images } from "@/constants/images";
import Loader from "@/components/common/Loader";
import MovieInfo from "@/components/movies/MovieInfo";
import { styles } from "@/styles/movie/MovieDetails.styles";

type LocalSearchParams = {
  id: string;
};

export default function MovieDetails() {
  const router = useRouter();
  const { id } = useLocalSearchParams() as LocalSearchParams;

  const { data: movie, isLoading } = useQuery({
    queryKey: ["movieDetails", id],
    queryFn: () => MovieService.getMovieDetails(id),
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });

  if (isLoading) return <Loader />;
  if (!movie) return null;

  const posterSource = movie.poster_path
    ? { uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }
    : images.noImage;

  return (
    <View className="bg-primary flex-1">
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View>
          <Image
            source={posterSource}
            className="w-full h-[550px]"
            resizeMode="stretch"
          />

          <TouchableOpacity
            onPress={router.back}
            style={styles.backButton}
            activeOpacity={0.7}
          >
            <FeatherIcon name="chevron-left" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        <View className="flex-col items-start justify-center mt-5 px-5">
          <Text className="text-white font-bold text-xl">{movie.title}</Text>
          <View className="flex-row items-center gap-x-1 mt-2">
            <Text className="text-light-200 text-sm">
              {movie.release_date.split("-")[0]} •
            </Text>
            <Text className="text-light-200 text-sm">{movie.runtime}m</Text>
          </View>

          <View className="flex-row items-center bg-dark-100 px-2 py-1 rounded-md gap-x-1 mt-2">
            <FontAwesomeIcon name="star" size={14} color="#FFD700" />
            <Text className="text-white font-bold text-sm">
              {Math.round(movie.vote_average)}/10
            </Text>
            <Text className="text-light-200 text-sm">
              ({movie.vote_count} votes)
            </Text>
          </View>

          <MovieInfo label="Overview" value={movie.overview} />
          <MovieInfo
            label="Genres"
            value={movie.genres.map((g) => g.name).join(" • ") || "N/A"}
          />

          <View className="flex flex-row justify-between w-1/2">
            <MovieInfo
              label="Budget"
              value={`$${movie.budget / 1_000_000} million`}
            />
            <MovieInfo
              label="Revenue"
              value={`$${Math.round(movie.revenue / 1_000_000)} million`}
            />
          </View>

          <MovieInfo
            label="Production Companies"
            value={
              movie.production_companies.map((c) => c.name).join(" • ") || "N/A"
            }
          />
        </View>
      </ScrollView>
    </View>
  );
}
