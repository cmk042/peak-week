import { ScrollView, StyleSheet, View, Text } from "react-native";
import DashHeader from "../components/DashHeader";

export default function Stats() {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <DashHeader challengeName="Summer Athletic Peak" daysLeft={3} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#0B1020",
  },
  screen: {
    flex: 1,
    backgroundColor: "#0B1020",
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 64,
    paddingBottom: 130,
  },
});
