import { StyleSheet, Text, View, Pressable } from "react-native";

type EventCardProps = {
  eventName: string;
  icon: string;
  leaderName: string;
  topImproverName: string;
  improvementPercent: number;
  onPress: () => void;
};

export default function EventCard({
  eventName,
  icon,
  leaderName,
  topImproverName,
  improvementPercent,
  onPress,
}: EventCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
    >
      <View style={styles.topRow}>
        <View style={styles.iconCircle}>
          <Text style={styles.icon}>{icon}</Text>
        </View>
        <Text style={styles.arrow}>→</Text>
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
    </Pressable>
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
  cardPressed: {
    borderColor: "#3B82F6",
    backgroundColor: "#172554",
    transform: [{ scale: 0.98 }],
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  arrow: {
    color: "#6B7280",
    fontSize: 16,
    fontWeight: "700",
  },
});
