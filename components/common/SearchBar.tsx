import { View, TextInput } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";

interface SearchBarProps {
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
  onPress?: () => void;
}

export default function SearchBar({
  placeholder,
  value,
  onChangeText,
  onPress,
}: SearchBarProps) {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
      <Ionicon name="search-outline" size={20} color="#AB8BFF" />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        className="flex-1 ml-2 text-white"
        placeholderTextColor="#A8B5DB"
      />
    </View>
  );
}
