import { useState } from "react";
import { View, Text, FlatList } from "react-native";
import { useQuery } from "@tanstack/react-query";

import { MovieService } from "@/services/tmdb/api";

import SearchBar from "@/components/common/SearchBar";
import MovieDisplayCard from "@/components/movies/MovieCard";
import BackgroundImage from "@/components/common/Background";
import LogoIcon from "@/components/common/LogoIcon";
import { Movie } from "@/types/movie";
import { useDebounce } from "use-debounce";
import Loader from "@/components/common/Loader";
import { styles } from "@/styles/tabs/TabsSearch.styles";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery] = useDebounce(searchQuery, 500);

  const {
    data: movies,
    isLoading,
    isFetching,
  } = useQuery<Movie[], Error>({
    queryKey: ["searchMovies", debouncedSearchQuery],
    queryFn: () => MovieService.getMovies({ query: debouncedSearchQuery }),
    enabled: !!debouncedSearchQuery.trim(),
    staleTime: 5 * 60 * 1000,
    placeholderData: debouncedSearchQuery.trim()
      ? (previousData) => previousData
      : undefined,
  });

  const handleSearch = (text: string) => {
    setSearchQuery(text);
  };

  const showLoading = isLoading || isFetching;

  return (
    <View className="flex-1 bg-primary">
      <BackgroundImage />

      <FlatList
        className="px-5"
        data={movies || []}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MovieDisplayCard {...item} />}
        numColumns={3}
        columnWrapperStyle={styles.flatListColumnWrapper}
        contentContainerStyle={styles.flatListContentContainer}
        ListHeaderComponent={
          <>
            <LogoIcon />

            <View className="my-5">
              <SearchBar
                placeholder="Search for a movie"
                value={searchQuery}
                onChangeText={handleSearch}
              />
            </View>

            {showLoading && <Loader />}

            {!showLoading &&
              debouncedSearchQuery.trim() &&
              movies &&
              movies.length > 0 && (
                <Text className="text-xl text-white font-bold">
                  Search Results for{" "}
                  <Text className="text-accent">{debouncedSearchQuery}</Text>
                </Text>
              )}
          </>
        }
        ListEmptyComponent={
          !showLoading ? (
            <View className="mt-10 px-5">
              <Text className="text-center text-gray-500">
                {debouncedSearchQuery.trim()
                  ? "No movies found"
                  : "Start typing to search for movies"}
              </Text>
            </View>
          ) : null
        }
      />
    </View>
  );
}
