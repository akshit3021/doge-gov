import { ArchitectsDaughter_400Regular, useFonts } from '@expo-google-fonts/architects-daughter';
import { Stack } from "expo-router";
import "./global.css";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    ArchitectsDaughter_400Regular
  });

  if (!fontsLoaded) return null;

  return <Stack />;
}
