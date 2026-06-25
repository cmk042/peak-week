import { StyleSheet, Text, View } from "react-native";

type TimeCardProps = {
  daysLeft: number;
  currentDay: number;
  totalDays: number;
  endDateLabel: string;
};

export default function TimeCard({
  daysLeft,
  currentDay,
  totalDays,
  endDateLabel,
}: TimeCardProps) {
  const progress = currentDay / totalDays;

  return (
    <View style={styles.card}>
      <Text style={styles.label}>TIME REMAINING</Text>

      <View style={styles.row}>
        <Text style={styles.days}>{daysLeft}</Text>
        <Text style={styles.daysText}>days left</Text>
      </View>

      <View style={styles.progressTrack}>
        <View style={[styles.progressFill, { width: `${progress * 100}%` }]} />
      </View>

      <Text style={styles.caption}>
        Day {currentDay} of {totalDays} · Ends {endDateLabel}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#3B82F6",
    borderRadius: 24,
    padding: 24,
    width: "100%",
  },
  label: {
    color: "#DBEAFE",
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 1.5,
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginTop: 20,
  },
  days: {
    color: "white",
    fontSize: 56,
    fontWeight: "800",
    lineHeight: 60,
  },
  daysText: {
    color: "#DBEAFE",
    fontSize: 26,
    fontWeight: "700",
    marginLeft: 10,
    marginBottom: 6,
  },
  progressTrack: {
    height: 8,
    backgroundColor: "rgba(255,255,255,0.25)",
    borderRadius: 999,
    marginTop: 22,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "white",
    borderRadius: 999,
  },
  caption: {
    color: "#DBEAFE",
    fontSize: 16,
    marginTop: 14,
  },
});
