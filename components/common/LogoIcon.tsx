import { View, Text } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";

export default function LogoIcon() {
  return (
    <View className="mt-20 mb-5 flex-row items-center justify-center gap-2">
      <FeatherIcon name="film" size={32} color="white" />
      <Text className="text-white text-xl font-bold">CineApp</Text>
    </View>
  );
}
