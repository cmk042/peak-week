import { useState } from "react";
import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";
import LeaderboardList from "../components/LeaderboardList";

type EventDetailProps = {
  route: {
    params: {
      eventId: string;
    };
  };
};

type TabType = "rankings" | "improved" | "myStats";

export default function EventDetail({ route }: EventDetailProps) {
  const { eventId } = route.params;
  console.log("EVENT ID:", eventId);
  const [selectedTab, setSelectedTab] = useState<TabType>("rankings");

  const event = getDisplayEvent(eventId);

  const currentLeaderboard =
    selectedTab === "rankings" ? event.rankings : event.improved;

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.icon}>{event.icon}</Text>

        <View>
          <Text style={styles.title}>{event.name}</Text>
        </View>
      </View>

      <View style={styles.tabs}>
        <Pressable
          onPress={() => setSelectedTab("rankings")}
          style={[styles.tab, selectedTab === "rankings" && styles.activeTab]}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === "rankings" && styles.activeTabText,
            ]}
          >
            Rankings
          </Text>
        </Pressable>

        <Pressable
          onPress={() => setSelectedTab("improved")}
          style={[styles.tab, selectedTab === "improved" && styles.activeTab]}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === "improved" && styles.activeTabText,
            ]}
          >
            Improved
          </Text>
        </Pressable>

        <Pressable
          onPress={() => setSelectedTab("myStats")}
          style={[styles.tab, selectedTab === "myStats" && styles.activeTab]}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === "myStats" && styles.activeTabText,
            ]}
          >
            My Stats
          </Text>
        </Pressable>
      </View>

      {selectedTab === "myStats" ? (
        <View style={styles.myStatsCard}>
          <Text style={styles.myStatsTitle}>Your Stats</Text>
          <Text style={styles.myStatsText}>
            Current: {event.myStats.current} {event.unit}
          </Text>
          <Text style={styles.myStatsText}>
            Baseline: {event.myStats.baseline} {event.unit}
          </Text>
          <Text style={styles.myStatsText}>
            Improvement: {event.myStats.improvement.toFixed(1)}%
          </Text>
        </View>
      ) : (
        <LeaderboardList events={currentLeaderboard} />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#0B1020",
  },
  content: {
    paddingTop: 64,
    paddingHorizontal: 24,
    paddingBottom: 130,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
    gap: 14,
  },
  icon: {
    fontSize: 42,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 34,
    fontWeight: "900",
    letterSpacing: -1.8,
    lineHeight: 38,
    marginBottom: 4,
  },
  tabs: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 30,
  },
  tab: {
    flex: 1,
    height: 48,
    borderRadius: 999,
    backgroundColor: "#1A1B2A",
    alignItems: "center",
    justifyContent: "center",
  },
  activeTab: {
    backgroundColor: "#3B82F6",
  },
  tabText: {
    color: "#777A89",
    fontSize: 16,
    fontWeight: "900",
  },
  activeTabText: {
    color: "#FFFFFF",
  },
  myStatsCard: {
    backgroundColor: "#111827",
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: "#1F2937",
  },
  myStatsTitle: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "900",
    marginBottom: 12,
  },
  myStatsText: {
    color: "#A7ADBC",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 8,
  },
});

function getDisplayEvent(eventId: string) {
  const event = mockEventDetails[eventId] ?? mockEventDetails.bench;

  return {
    ...event,

    rankings: event.rankings.map((row: any) => ({
      ...row,
      absolute: true,
    })),

    improved: event.improved.map((row: any) => {
      const rankingRow = event.rankings.find(
        (ranking: any) => ranking.name === row.name,
      );

      return {
        ...row,
        unit: event.unit,
        value: rankingRow?.value ?? row.value,
        baseline: rankingRow?.baseline ?? row.baseline,
        pr: rankingRow?.pr ?? row.pr,
        absolute: false,
      };
    }),
  };
}

const mockEventDetails: Record<string, any> = {
  bench: {
    id: "bench",
    name: "Bench Press",
    icon: "🏋️‍♂️",
    unit: "lbs",
    higherIsBetter: true,
    myStats: {
      current: 225,
      baseline: 185,
      improvement: 21.6,
    },
    rankings: [
      {
        rank: 1,
        name: "Steve",
        initials: "S",
        color: "#22C55E",
        unit: "lbs",
        value: 275,
        improvement: 12.2,
        baseline: 245,
        pr: false,
      },
      {
        rank: 2,
        name: "Jacob",
        initials: "J",
        color: "#F97316",
        unit: "lbs",
        value: 265,
        improvement: 17.8,
        baseline: 225,
        pr: false,
      },
      {
        rank: 3,
        name: "Casey",
        initials: "C",
        color: "#3B82F6",
        unit: "lbs",
        value: 225,
        improvement: 21.6,
        baseline: 185,
        pr: true,
      },
      {
        rank: 4,
        name: "Maya",
        initials: "M",
        color: "#A855F7",
        unit: "lbs",
        value: 105,
        improvement: 23.5,
        baseline: 85,
        pr: false,
      },
      {
        rank: 5,
        name: "Sarah",
        initials: "Sa",
        color: "#EC4899",
        unit: "lbs",
        value: 90,
        improvement: 38.5,
        baseline: 65,
        pr: true,
      },
    ],
    improved: [
      {
        rank: 1,
        name: "Sarah",
        initials: "Sa",
        color: "#EC4899",
        unit: "%",
        value: 38.5,
        improvement: 38.5,
        baseline: 65,
        pr: true,
      },
      {
        rank: 2,
        name: "Maya",
        initials: "M",
        color: "#A855F7",
        unit: "%",
        value: 23.5,
        improvement: 23.5,
        baseline: 85,
        pr: false,
      },
      {
        rank: 3,
        name: "Casey",
        initials: "C",
        color: "#3B82F6",
        unit: "%",
        value: 21.6,
        improvement: 21.6,
        baseline: 185,
        pr: true,
      },
      {
        rank: 4,
        name: "Jacob",
        initials: "J",
        color: "#F97316",
        unit: "%",
        value: 17.8,
        improvement: 17.8,
        baseline: 225,
        pr: false,
      },
      {
        rank: 5,
        name: "Steve",
        initials: "S",
        color: "#22C55E",
        unit: "%",
        value: 12.2,
        improvement: 12.2,
        baseline: 245,
        pr: false,
      },
    ],
  },

  squat: {
    id: "squat",
    name: "Squat",
    icon: "🦵",
    unit: "lbs",
    higherIsBetter: true,
    myStats: {
      current: 315,
      baseline: 275,
      improvement: 14.5,
    },
    rankings: [
      {
        rank: 1,
        name: "Steve",
        initials: "S",
        color: "#22C55E",
        unit: "lbs",
        value: 405,
        improvement: 15.7,
        baseline: 350,
        pr: true,
      },
      {
        rank: 2,
        name: "Jacob",
        initials: "J",
        color: "#F97316",
        unit: "lbs",
        value: 365,
        improvement: 12.3,
        baseline: 325,
        pr: false,
      },
      {
        rank: 3,
        name: "Casey",
        initials: "C",
        color: "#3B82F6",
        unit: "lbs",
        value: 315,
        improvement: 14.5,
        baseline: 275,
        pr: true,
      },
      {
        rank: 4,
        name: "Sarah",
        initials: "Sa",
        color: "#EC4899",
        unit: "lbs",
        value: 185,
        improvement: 30.4,
        baseline: 142,
        pr: true,
      },
      {
        rank: 5,
        name: "Maya",
        initials: "M",
        color: "#A855F7",
        unit: "lbs",
        value: 165,
        improvement: 22.2,
        baseline: 135,
        pr: false,
      },
    ],
    improved: [
      {
        rank: 1,
        name: "Sarah",
        initials: "Sa",
        color: "#EC4899",
        unit: "%",
        value: 30.4,
        improvement: 30.4,
        baseline: 142,
        pr: true,
      },
      {
        rank: 2,
        name: "Maya",
        initials: "M",
        color: "#A855F7",
        unit: "%",
        value: 22.2,
        improvement: 22.2,
        baseline: 135,
        pr: false,
      },
      {
        rank: 3,
        name: "Steve",
        initials: "S",
        color: "#22C55E",
        unit: "%",
        value: 15.7,
        improvement: 15.7,
        baseline: 350,
        pr: true,
      },
      {
        rank: 4,
        name: "Casey",
        initials: "C",
        color: "#3B82F6",
        unit: "%",
        value: 14.5,
        improvement: 14.5,
        baseline: 275,
        pr: true,
      },
      {
        rank: 5,
        name: "Jacob",
        initials: "J",
        color: "#F97316",
        unit: "%",
        value: 12.3,
        improvement: 12.3,
        baseline: 325,
        pr: false,
      },
    ],
  },

  vertical: {
    id: "vertical",
    name: "Vertical Jump",
    icon: "⬆️",
    unit: "in",
    higherIsBetter: true,
    myStats: {
      current: 30,
      baseline: 24,
      improvement: 25.0,
    },
    rankings: [
      {
        rank: 1,
        name: "Jacob",
        initials: "J",
        color: "#F97316",
        unit: "in",
        value: 34,
        improvement: 17.2,
        baseline: 29,
        pr: false,
      },
      {
        rank: 2,
        name: "Casey",
        initials: "C",
        color: "#3B82F6",
        unit: "in",
        value: 30,
        improvement: 25.0,
        baseline: 24,
        pr: true,
      },
      {
        rank: 3,
        name: "Steve",
        initials: "S",
        color: "#22C55E",
        unit: "in",
        value: 29,
        improvement: 11.5,
        baseline: 26,
        pr: false,
      },
      {
        rank: 4,
        name: "Sarah",
        initials: "Sa",
        color: "#EC4899",
        unit: "in",
        value: 24,
        improvement: 20.0,
        baseline: 20,
        pr: true,
      },
      {
        rank: 5,
        name: "Maya",
        initials: "M",
        color: "#A855F7",
        unit: "in",
        value: 22,
        improvement: 15.8,
        baseline: 19,
        pr: false,
      },
    ],
    improved: [
      {
        rank: 1,
        name: "Casey",
        initials: "C",
        color: "#3B82F6",
        unit: "%",
        value: 25.0,
        improvement: 25.0,
        baseline: 24,
        pr: true,
      },
      {
        rank: 2,
        name: "Sarah",
        initials: "Sa",
        color: "#EC4899",
        unit: "%",
        value: 20.0,
        improvement: 20.0,
        baseline: 20,
        pr: true,
      },
      {
        rank: 3,
        name: "Jacob",
        initials: "J",
        color: "#F97316",
        unit: "%",
        value: 17.2,
        improvement: 17.2,
        baseline: 29,
        pr: false,
      },
      {
        rank: 4,
        name: "Maya",
        initials: "M",
        color: "#A855F7",
        unit: "%",
        value: 15.8,
        improvement: 15.8,
        baseline: 19,
        pr: false,
      },
      {
        rank: 5,
        name: "Steve",
        initials: "S",
        color: "#22C55E",
        unit: "%",
        value: 11.5,
        improvement: 11.5,
        baseline: 26,
        pr: false,
      },
    ],
  },

  dash100: {
    id: "dash100",
    name: "100m Dash",
    icon: "💨",
    unit: "sec",
    higherIsBetter: false,
    myStats: {
      current: 13.2,
      baseline: 14.0,
      improvement: 5.7,
    },
    rankings: [
      {
        rank: 1,
        name: "Jacob",
        initials: "J",
        color: "#F97316",
        unit: "sec",
        value: 11.9,
        improvement: 6.2,
        baseline: 12.7,
        pr: true,
      },
      {
        rank: 2,
        name: "Casey",
        initials: "C",
        color: "#3B82F6",
        unit: "sec",
        value: 13.2,
        improvement: 5.7,
        baseline: 14.0,
        pr: false,
      },
      {
        rank: 3,
        name: "Steve",
        initials: "S",
        color: "#22C55E",
        unit: "sec",
        value: 13.5,
        improvement: 3.6,
        baseline: 14.0,
        pr: false,
      },
      {
        rank: 4,
        name: "Sarah",
        initials: "Sa",
        color: "#EC4899",
        unit: "sec",
        value: 14.4,
        improvement: 5.3,
        baseline: 15.2,
        pr: true,
      },
      {
        rank: 5,
        name: "Maya",
        initials: "M",
        color: "#A855F7",
        unit: "sec",
        value: 14.8,
        improvement: 4.5,
        baseline: 15.5,
        pr: false,
      },
    ],
    improved: [
      {
        rank: 1,
        name: "Jacob",
        initials: "J",
        color: "#F97316",
        unit: "%",
        value: 6.2,
        improvement: 6.2,
        baseline: 12.7,
        pr: true,
      },
      {
        rank: 2,
        name: "Casey",
        initials: "C",
        color: "#3B82F6",
        unit: "%",
        value: 5.7,
        improvement: 5.7,
        baseline: 14.0,
        pr: false,
      },
      {
        rank: 3,
        name: "Sarah",
        initials: "Sa",
        color: "#EC4899",
        unit: "%",
        value: 5.3,
        improvement: 5.3,
        baseline: 15.2,
        pr: true,
      },
      {
        rank: 4,
        name: "Maya",
        initials: "M",
        color: "#A855F7",
        unit: "%",
        value: 4.5,
        improvement: 4.5,
        baseline: 15.5,
        pr: false,
      },
      {
        rank: 5,
        name: "Steve",
        initials: "S",
        color: "#22C55E",
        unit: "%",
        value: 3.6,
        improvement: 3.6,
        baseline: 14.0,
        pr: false,
      },
    ],
  },

  mile: {
    id: "mile",
    name: "Mile",
    icon: "🏃",
    unit: "min",
    higherIsBetter: false,
    myStats: {
      current: 6.35,
      baseline: 7.1,
      improvement: 10.6,
    },
    rankings: [
      {
        rank: 1,
        name: "Maya",
        initials: "M",
        color: "#A855F7",
        unit: "min",
        value: 5.8,
        improvement: 12.8,
        baseline: 6.65,
        pr: true,
      },
      {
        rank: 2,
        name: "Jacob",
        initials: "J",
        color: "#F97316",
        unit: "min",
        value: 6.1,
        improvement: 7.6,
        baseline: 6.6,
        pr: false,
      },
      {
        rank: 3,
        name: "Casey",
        initials: "C",
        color: "#3B82F6",
        unit: "min",
        value: 6.35,
        improvement: 10.6,
        baseline: 7.1,
        pr: false,
      },
      {
        rank: 4,
        name: "Sarah",
        initials: "Sa",
        color: "#EC4899",
        unit: "min",
        value: 6.5,
        improvement: 11.0,
        baseline: 7.3,
        pr: true,
      },
      {
        rank: 5,
        name: "Steve",
        initials: "S",
        color: "#22C55E",
        unit: "min",
        value: 7.0,
        improvement: 6.7,
        baseline: 7.5,
        pr: false,
      },
    ],
    improved: [
      {
        rank: 1,
        name: "Maya",
        initials: "M",
        color: "#A855F7",
        unit: "%",
        value: 12.8,
        improvement: 12.8,
        baseline: 6.65,
        pr: true,
      },
      {
        rank: 2,
        name: "Sarah",
        initials: "Sa",
        color: "#EC4899",
        unit: "%",
        value: 11.0,
        improvement: 11.0,
        baseline: 7.3,
        pr: true,
      },
      {
        rank: 3,
        name: "Casey",
        initials: "C",
        color: "#3B82F6",
        unit: "%",
        value: 10.6,
        improvement: 10.6,
        baseline: 7.1,
        pr: false,
      },
      {
        rank: 4,
        name: "Jacob",
        initials: "J",
        color: "#F97316",
        unit: "%",
        value: 7.6,
        improvement: 7.6,
        baseline: 6.6,
        pr: false,
      },
      {
        rank: 5,
        name: "Steve",
        initials: "S",
        color: "#22C55E",
        unit: "%",
        value: 6.7,
        improvement: 6.7,
        baseline: 7.5,
        pr: false,
      },
    ],
  },

  pullups: {
    id: "pullups",
    name: "Pull-ups",
    icon: "💪",
    unit: "reps",
    higherIsBetter: true,
    myStats: {
      current: 15,
      baseline: 12,
      improvement: 25.0,
    },
    rankings: [
      {
        rank: 1,
        name: "Casey",
        initials: "C",
        color: "#3B82F6",
        unit: "reps",
        value: 15,
        improvement: 25.0,
        baseline: 12,
        pr: true,
      },
      {
        rank: 2,
        name: "Jacob",
        initials: "J",
        color: "#F97316",
        unit: "reps",
        value: 14,
        improvement: 16.7,
        baseline: 12,
        pr: false,
      },
      {
        rank: 3,
        name: "Steve",
        initials: "S",
        color: "#22C55E",
        unit: "reps",
        value: 13,
        improvement: 8.3,
        baseline: 12,
        pr: false,
      },
      {
        rank: 4,
        name: "Maya",
        initials: "M",
        color: "#A855F7",
        unit: "reps",
        value: 9,
        improvement: 12.5,
        baseline: 8,
        pr: false,
      },
      {
        rank: 5,
        name: "Sarah",
        initials: "Sa",
        color: "#EC4899",
        unit: "reps",
        value: 8,
        improvement: 14.3,
        baseline: 7,
        pr: true,
      },
    ],
    improved: [
      {
        rank: 1,
        name: "Casey",
        initials: "C",
        color: "#3B82F6",
        unit: "%",
        value: 25.0,
        improvement: 25.0,
        baseline: 12,
        pr: true,
      },
      {
        rank: 2,
        name: "Jacob",
        initials: "J",
        color: "#F97316",
        unit: "%",
        value: 16.7,
        improvement: 16.7,
        baseline: 12,
        pr: false,
      },
      {
        rank: 3,
        name: "Sarah",
        initials: "Sa",
        color: "#EC4899",
        unit: "%",
        value: 14.3,
        improvement: 14.3,
        baseline: 7,
        pr: true,
      },
      {
        rank: 4,
        name: "Maya",
        initials: "M",
        color: "#A855F7",
        unit: "%",
        value: 12.5,
        improvement: 12.5,
        baseline: 8,
        pr: false,
      },
      {
        rank: 5,
        name: "Steve",
        initials: "S",
        color: "#22C55E",
        unit: "%",
        value: 8.3,
        improvement: 8.3,
        baseline: 12,
        pr: false,
      },
    ],
  },
};
