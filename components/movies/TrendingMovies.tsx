import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import TrendingCard from "@/components/movies/TrendingCard";
import { Movie, TrendingPeriod } from "@/types/movie";
import { TRENDING_PERIODS } from "@/constants/movie";
import { styles } from "@/styles/components/TrendingMovies";

interface TrendingMoviesProps {
  trendingMovies: Movie[];
  trendingPeriod: TrendingPeriod;
  setTrendingPeriod: (period: TrendingPeriod) => void;
}

export default function TrendingMovies({
  trendingMovies,
  trendingPeriod,
  setTrendingPeriod,
}: TrendingMoviesProps) {
  return (
    <View>
      <Text className="text-lg text-white font-bold mb-3">Trending Movies</Text>

      <View className="flex-row gap-3 mb-4">
        {TRENDING_PERIODS.map((period) => (
          <TouchableOpacity
            key={period}
            onPress={() => setTrendingPeriod(period)}
            className={`px-4 py-2 rounded-full ${
              trendingPeriod === period ? "bg-accent" : "bg-secondary"
            }`}
          >
            <Text className="text-white capitalize font-medium">{period}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        className="mb-4 mt-1"
        data={trendingMovies}
        contentContainerStyle={styles.flatListContentContainer}
        renderItem={({ item, index }) => (
          <TrendingCard movie={item} index={index} />
        )}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View className="w-4" />}
      />
    </View>
  );
}
