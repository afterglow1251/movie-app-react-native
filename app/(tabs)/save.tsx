import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicon from "react-native-vector-icons/Ionicons";

// TODO: Add saved movies functionality
export default function Save() {
  return (
    <SafeAreaView className="bg-primary flex-1 pt-10">
      <View className="items-center justify-center flex-1">
        <View className="w-24 h-24 flex justify-center items-center">
          <Ionicon name="bookmark-outline" size={50} color="#fff" />
        </View>
        <Text className="text-white text-2xl font-semibold mt-4">Saved</Text>
      </View>
    </SafeAreaView>
  );
}
