import { StyleSheet, Text, View } from "react-native";

type EventCardProps = {
  eventName: string;
  icon: string;
  leaderName: string;
  topImproverName: string;
  improvementPercent: number;
};

export default function EventCard({
  eventName,
  icon,
  leaderName,
  topImproverName,
  improvementPercent,
}: EventCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.iconCircle}>
        <Text style={styles.icon}>{icon}</Text>
      </View>

      <Text style={styles.eventName}>{eventName}</Text>

      <View style={styles.statBlock}>
        <Text style={styles.label}>Leader</Text>
        <Text style={styles.value}>{leaderName}</Text>
      </View>

      <View style={styles.statBlock}>
        <Text style={styles.label}>Top Improver</Text>
        <Text style={styles.value}>{topImproverName}</Text>
      </View>

      <Text style={styles.improvement}>↑ {improvementPercent.toFixed(1)}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginTop: 4,
  },
  sectionTitle: {
    color: "#4C9DFF",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.6,
    marginBottom: 12,
    textTransform: "uppercase",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  card: {
    width: "48%",
    backgroundColor: "#111827",
    borderRadius: 22,
    padding: 16,
    borderWidth: 1,
    borderColor: "#1F2937",
  },
  iconCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#1A1B2A",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  icon: {
    fontSize: 22,
  },
  eventName: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "900",
    marginBottom: 14,
  },
  statBlock: {
    marginBottom: 8,
  },
  label: {
    color: "#6B7280",
    fontSize: 11,
    fontWeight: "700",
    textTransform: "uppercase",
    marginBottom: 2,
  },
  value: {
    color: "#D1D5DB",
    fontSize: 13,
    fontWeight: "700",
  },
  improvement: {
    color: "#22C55E",
    fontSize: 15,
    fontWeight: "900",
    marginTop: 4,
  },
});
