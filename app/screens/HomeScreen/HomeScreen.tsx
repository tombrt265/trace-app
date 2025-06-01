import WelcomeMessage from "@/app/components/WelcomeMessage";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View>
      <Text>
        <WelcomeMessage />
      </Text>
    </View>
  );
}
