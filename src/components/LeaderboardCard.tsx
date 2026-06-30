import { StyleSheet, Text, View } from "react-native";

type LeaderboardCardProps = {
  rank: number;
  name: string;
  initials: string;
  color: string;
  unit: string;
  value: number;
  improvement: number;
  baseline: number;
  pr: boolean;
  absolute: boolean;
};

export default function LeaderboardCard({
  rank,
  name,
  initials,
  color,
  unit,
  value,
  improvement,
  baseline,
  pr,
  absolute,
}: LeaderboardCardProps) {
  const medal =
    rank === 1 ? "🥇" : rank === 2 ? "🥈" : rank === 3 ? "🥉" : null;

  return (
    <View style={[styles.card, rank === 1 && styles.firstPlaceCard]}>
      <View style={styles.left}>
        <View style={styles.rankCircle}>
          <Text style={styles.rankText}>{medal ?? `#${rank}`}</Text>
        </View>

        <View style={[styles.avatar, { backgroundColor: color }]}>
          <Text style={styles.avatarText}>{initials}</Text>
        </View>

        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.baseline}>
            {absolute
              ? `Baseline: ${baseline} ${unit}`
              : `${baseline} → ${value} ${unit}`}
          </Text>
        </View>
      </View>

      <View style={styles.right}>
        <Text style={[styles.value, !absolute && styles.improvementValue]}>
          {absolute ? (
            <>
              {value}
              <Text style={styles.unit}> {unit}</Text>
            </>
          ) : (
            `↑ ${improvement.toFixed(1)}%`
          )}
        </Text>

        {absolute && pr && <Text style={styles.pr}>🔥 PR</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    minHeight: 88,
    backgroundColor: "#111827",
    borderRadius: 24,
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderWidth: 1,
    borderColor: "#1F2937",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  firstPlaceCard: {
    borderColor: "#8B5A1F",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  rankCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#252B3A",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },
  rankText: {
    color: "#8B92A5",
    fontSize: 14,
    fontWeight: "900",
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  avatarText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "900",
  },
  name: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "900",
    marginBottom: 4,
  },
  baseline: {
    color: "#6B7280",
    fontSize: 14,
    fontWeight: "700",
  },
  right: {
    alignItems: "flex-end",
  },
  value: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "900",
  },
  unit: {
    color: "#6B7280",
    fontSize: 13,
    fontWeight: "900",
  },
  pr: {
    color: "#FACC15",
    fontSize: 12,
    fontWeight: "900",
    marginTop: 12,
  },
  improvementValue: {
    color: "#00F58A",
  },
});
