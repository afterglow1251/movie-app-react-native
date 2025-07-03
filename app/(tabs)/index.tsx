import { View, ScrollView, StyleSheet } from "react-native";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { MovieService } from "@/services/tmdb/api";
import LogoIcon from "@/components/common/LogoIcon";
import BackgroundImage from "@/components/common/Background";
import Loader from "@/components/common/Loader";
import TrendingMovies from "@/components/movies/TrendingMovies";
import LatestMovies from "@/components/movies/LatestMovies";
import { TrendingPeriod } from "@/types/movie";
import { styles } from "@/styles/tabs/TabsIndex.styles";

export default function Index() {
  const [trendingPeriod, setTrendingPeriod] = useState<TrendingPeriod>("day");

  const { data: trendingMovies, isLoading: trendingLoading } = useQuery({
    queryKey: ["trendingMovies", trendingPeriod],
    queryFn: () => MovieService.getTrending(trendingPeriod),
  });

  const { data: movies, isLoading: moviesLoading } = useQuery({
    queryKey: ["latestMovies"],
    queryFn: () => MovieService.getMovies({ query: "" }),
  });

  const isLoading = moviesLoading || trendingLoading;

  return (
    <View className="flex-1 bg-primary">
      <BackgroundImage />

      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <LogoIcon />

        {isLoading ? (
          <Loader />
        ) : (
          <View className="flex-1 mt-5">
            {trendingMovies && (
              <TrendingMovies
                trendingMovies={trendingMovies}
                trendingPeriod={trendingPeriod}
                setTrendingPeriod={setTrendingPeriod}
              />
            )}

            {movies && <LatestMovies movies={movies} />}
          </View>
        )}
      </ScrollView>
    </View>
  );
}
