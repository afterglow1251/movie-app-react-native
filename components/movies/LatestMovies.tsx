import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import MovieCard from "@/components/movies/MovieCard";
import { Movie } from "@/types/movie";
import { styles } from "@/styles/components/LatestMovies.styles";

interface LatestMoviesProps {
  movies: Movie[];
}

export default function LatestMovies({ movies }: LatestMoviesProps) {
  return (
    <View>
      <Text className="text-lg text-white font-bold mt-5 mb-3">
        Latest Movies
      </Text>
      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        columnWrapperStyle={styles.flatListColumnWrapper}
        className="mt-2 pb-32"
        scrollEnabled={false}
      />
    </View>
  );
}
