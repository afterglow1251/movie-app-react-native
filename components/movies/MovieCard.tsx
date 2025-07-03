import { Link } from "expo-router";
import { Text, Image, TouchableOpacity, View, StyleSheet } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { images } from "@/constants/images";
import { Movie } from "@/types/movie";
import { styles } from "@/styles/components/MovieCard";

export default function MovieCard({
  id,
  poster_path,
  title,
  vote_average,
  release_date,
}: Movie) {
  const posterSource = poster_path
    ? { uri: `https://image.tmdb.org/t/p/w500${poster_path}` }
    : images.noImage;

  return (
    <Link href={`/movie/${id}`} asChild>
      <TouchableOpacity className="w-[30%]">
        <Image source={posterSource} style={styles.image} resizeMode="cover" />

        <Text className="text-sm font-bold text-white mt-2" numberOfLines={1}>
          {title}
        </Text>

        <View className="flex-row items-center justify-between mt-1">
          <View className="flex-row items-center justify-start gap-x-1">
            <FontAwesomeIcon name="star" size={14} color="#FFD700" />
            <Text className="text-xs text-white font-bold uppercase">
              {Math.round(vote_average)}
            </Text>
          </View>
          <Text className="text-xs text-light-300 font-medium">
            {release_date?.split("-")[0]}
          </Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
}
