import { StyleSheet, Text, View } from "react-native";

type Activity = {
  id: string;
  text: string;
  time: string;
};

type ActivityBoardProps = {
  activities: Activity[];
};

export default function ActivityBoard({ activities }: ActivityBoardProps) {
  return (
    <View style={styles.section}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>RECENT ACTIVITY</Text>
        <Text style={styles.seeAll}>See all ›</Text>
      </View>

      <View style={styles.card}>
        {activities.map((activity) => (
          <View key={activity.id} style={styles.row}>
            <View style={styles.dot} />
            <View style={styles.textGroup}>
              <Text style={styles.activityText}>{activity.text}</Text>
              <Text style={styles.time}>{activity.time}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginTop: 26,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  title: {
    color: "#4C9DFF",
    fontSize: 14,
    fontWeight: "800",
    letterSpacing: 1.6,
  },
  seeAll: {
    color: "#6B7280",
    fontSize: 14,
    fontWeight: "700",
  },
  card: {
    backgroundColor: "#111827",
    borderRadius: 22,
    padding: 18,
    borderWidth: 1,
    borderColor: "#1F2937",
    gap: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#3B82F6",
    marginRight: 12,
  },
  textGroup: {
    flex: 1,
  },
  activityText: {
    color: "white",
    fontSize: 15,
    fontWeight: "700",
  },
  time: {
    color: "#8B92A5",
    fontSize: 13,
    marginTop: 3,
  },
});
