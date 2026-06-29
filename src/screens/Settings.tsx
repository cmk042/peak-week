import { ScrollView, StyleSheet, View, Text } from "react-native";

export default function Settings() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#0B1020",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: "white", fontSize: 24 }}>Settings</Text>
    </View>
  );
}
