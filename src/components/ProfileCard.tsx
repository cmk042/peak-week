import { StyleSheet, Text, View } from "react-native";

type ProfileCardProps = {
  initials: string;
  name: string;
  height: string;
  weight: string;
  groupRank: number;
  averageImprovement: number;
  eventCount: number;
};

function getRankColor(rank: number) {
  if (rank === 1) return "#FACC15"; // gold
  if (rank === 2) return "#D1D5DB"; // silver
  if (rank === 3) return "#F97316"; // bronze/orange
  return "#FFFFFF";
}

function getImprovementColor(improvement: number) {
  if (improvement >= 25) return "#22C55E";
  if (improvement >= 15) return "#A3E635";
  if (improvement >= 5) return "#FACC15";
  return "#FFFFFF";
}

export default function ProfileCard({
  initials,
  name,
  height,
  weight,
  groupRank,
  averageImprovement,
  eventCount,
}: ProfileCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <View style={styles.profileSquare}>
          <Text style={styles.initials}>{initials}</Text>
        </View>

        <View>
          <Text style={styles.profileName}>{name}</Text>
          <Text style={styles.infoText}>{height}</Text>
          <Text style={styles.infoText}>{weight}</Text>
        </View>
      </View>

      <View style={styles.bottomRow}>
        <View style={styles.statColumn}>
          <Text style={[styles.statValue, { color: getRankColor(groupRank) }]}>
            #{groupRank}
          </Text>
          <Text style={styles.statText}>Group Rank</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.statColumn}>
          <Text
            style={[
              styles.statValue,
              { color: getImprovementColor(averageImprovement) },
            ]}
          >
            +{averageImprovement.toFixed(1)}%
          </Text>
          <Text style={styles.statText}>Average Improvement</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.statColumn}>
          <Text style={[styles.statValue, { color: "#FFFFFF" }]}>
            {eventCount}
          </Text>
          <Text style={styles.statText}>Events</Text>
        </View>
      </View>
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
  topRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 18,
  },
  profileSquare: {
    width: 70,
    height: 70,
    backgroundColor: "#a3eaf5",
    borderRadius: 24,
    marginRight: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  initials: {
    color: "white",
    fontSize: 28,
    fontWeight: "900",
  },
  profileName: {
    color: "white",
    fontSize: 24,
    fontWeight: "900",
    shadowColor: "#ffffff",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  infoText: {
    color: "#DBEAFE",
    fontSize: 14,
    fontWeight: "500",
    marginLeft: 2,
    marginTop: 2,
  },
  statColumn: {
    alignItems: "center",
  },
  divider: {
    width: 1,
    height: 44,
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    marginHorizontal: 10,
  },
  statText: {
    color: "#DBEAFE",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    marginTop: 2,
  },
  statValue: {
    fontSize: 26,
    fontWeight: "900",
  },
});
