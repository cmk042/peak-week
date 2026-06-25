import { ScrollView, StyleSheet, View } from "react-native";
import Header from "../components/Header";
import TimeCard from "../components/TimeCard";
import StatCard from "../components/StatCard";
import ImproversBoard from "../components/ImproversBoard";
import ActivityBoard from "../components/ActivityBoard";
import BottomNav from "../components/BottomNav";

export default function Home() {
  return (
    <View style={styles.root}>
      <ScrollView
        style={styles.screen}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Header challengeName="Summer Athletic Peak" />

        <TimeCard
          daysLeft={18}
          currentDay={12}
          totalDays={30}
          endDateLabel="July 10, 2025"
        />

        <View style={styles.statsRow}>
          <StatCard icon="♙" value={5} label="Friends" iconColor="#3B82F6" />
          <StatCard icon="✓" value="4/6" label="Events" iconColor="#22C55E" />
          <StatCard icon="♨" value={8} label="New PRs" iconColor="#F97316" />
        </View>

        <ImproversBoard improvers={mockImprovers} />

        <ActivityBoard activities={mockActivities} />
      </ScrollView>
      <BottomNav />
    </View>
  );
}

const mockImprovers = [
  {
    rank: 1,
    initials: "S",
    name: "Sarah",
    improvement: 31.0,
    color: "#EC4899",
  },
  { rank: 2, initials: "M", name: "Maya", improvement: 25.8, color: "#A855F7" },
  {
    rank: 3,
    initials: "C",
    name: "Casey",
    improvement: 21.4,
    color: "#3B82F6",
  },
];

const mockActivities = [
  { id: "1", text: "Sarah improved her mile by 31.0%", time: "2h ago" },
  { id: "2", text: "Casey hit a new pull-up PR", time: "Yesterday" },
  { id: "3", text: "Maya entered final vertical jump", time: "2 days ago" },
];

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
  statsRow: {
    flexDirection: "row",
    gap: 14,
    marginTop: 24,
  },
});
