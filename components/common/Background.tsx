import { images } from "@/constants/images";
import { Image } from "react-native";

export default function BackgroundImage() {
  return (
    <Image
      source={images.bg}
      className="absolute w-full z-0"
      resizeMode="cover"
    />
  );
}
