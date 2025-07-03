import { Text, View } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";
import { TAB_WIDTH } from "@/constants/layout";
import { getFilledIconName } from "@/utils/icons.util";
import { colors } from "@/constants/colors";

interface TabIconProps {
  focused: boolean;
  iconName?: string;
  title?: string;
}

export default function TabIcon({ focused, title, iconName }: TabIconProps) {
  const filledIconName =
    focused && iconName ? getFilledIconName(iconName) : iconName;

  const tabColor = focused ? colors.white : colors.lilacSachet;

  return (
    <View className="items-center" style={{ minWidth: TAB_WIDTH }}>
      {filledIconName && (
        <Ionicon
          name={filledIconName}
          size={24}
          color={tabColor}
          className="z-10"
        />
      )}
      <Text
        className="text-xs font-semibold mt-1 z-10"
        style={{ color: tabColor }}
      >
        {title}
      </Text>
    </View>
  );
}
