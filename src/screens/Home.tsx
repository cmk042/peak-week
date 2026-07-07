import { ScrollView, StyleSheet, View } from "react-native";

import Header from "../components/Header";
import TimeCard from "../components/TimeCard";
import StatCard from "../components/StatCard";
import ImproversBoard from "../components/ImproversBoard";
import ActivityBoard from "../components/ActivityBoard";

import {
  getChallenge,
  getChallengeDayInfo,
  getEnabledEventCount,
  getFriendCount,
  getNewPRCount,
  getOverallImprovementLeaderboard,
  getRecentActivity,
} from "../data/selectors";

export default function Home() {
  const challenge = getChallenge();
  const dayInfo = getChallengeDayInfo();

  const friendCount = getFriendCount();
  const enabledEventCount = getEnabledEventCount();
  const totalEventCount = challenge.eventIds.length;
  const newPRCount = getNewPRCount();

  const topImprovers = getOverallImprovementLeaderboard().slice(0, 3);
  const recentActivity = getRecentActivity();

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Header challengeName={challenge.name} />

      <TimeCard
        daysLeft={dayInfo.daysLeft}
        currentDay={dayInfo.currentDay}
        totalDays={dayInfo.totalDays}
        endDateLabel={dayInfo.endDateLabel}
      />

      <View style={styles.statsRow}>
        <StatCard
          icon="♙"
          value={friendCount}
          label="Friends"
          iconColor="#3B82F6"
        />

        <StatCard
          icon="✓"
          value={`${enabledEventCount}/${totalEventCount}`}
          label="Events"
          iconColor="#22C55E"
        />

        <StatCard
          icon="♨"
          value={newPRCount}
          label="New PRs"
          iconColor="#F97316"
        />
      </View>

      <ImproversBoard improvers={topImprovers} />

      <ActivityBoard activities={recentActivity} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
