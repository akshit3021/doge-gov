import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        className="rounded-3xl bg-fuchsia-500 p-4 text-3xl"
        style={{ fontFamily: "ArchitectsDaughter_400Regular" }}
      >
        DOGE
      </Text>
    </View>
  );
}
