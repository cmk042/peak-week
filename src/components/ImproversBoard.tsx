import { StyleSheet, Text, View } from "react-native";

type Improver = {
  rank: number;
  initials: string;
  name: string;
  improvement: number;
  color: string;
};

type ImproversBoardProps = {
  improvers: Improver[];
};

export default function ImproversBoard({ improvers }: ImproversBoardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>TOP IMPROVERS</Text>
        <Text style={styles.seeAll}>See all ›</Text>
      </View>

      <View style={styles.list}>
        {improvers.map((person) => (
          <View key={person.name} style={styles.row}>
            <Text style={styles.medal}>{getMedal(person.rank)}</Text>

            <View style={[styles.avatar, { backgroundColor: person.color }]}>
              <Text style={styles.initials}>{person.initials}</Text>
            </View>

            <Text style={styles.name}>{person.name}</Text>

            <Text style={styles.improvement}>
              ↑ {person.improvement.toFixed(1)}%
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

function getMedal(rank: number) {
  if (rank === 1) return "🥇";
  if (rank === 2) return "🥈";
  if (rank === 3) return "🥉";
  return `${rank}`;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#111827",
    borderRadius: 22,
    padding: 20,
    borderWidth: 1,
    borderColor: "#1F2937",
    marginTop: 24,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 22,
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
  list: {
    gap: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  medal: {
    width: 30,
    fontSize: 18,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },
  initials: {
    color: "white",
    fontSize: 18,
    fontWeight: "800",
  },
  name: {
    flex: 1,
    color: "white",
    fontSize: 20,
    fontWeight: "800",
  },
  improvement: {
    color: "#00E676",
    fontSize: 18,
    fontWeight: "800",
  },
});
