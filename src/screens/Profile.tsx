import { ScrollView, StyleSheet, View, Text } from "react-native";
import LeaderboardCard from "../components/LeaderboardCard";

export default function Profile() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#0B1020",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: "white", fontSize: 24 }}>Profile</Text>
    </View>
  );
}
