import { StyleSheet, Text, View } from "react-native";

type Member = {
  id: string;
  initials: string;
  name: string;
  weight: number;
  color: string;
};

type ChallengeMemberBoardProps = {
  members: Member[];
};

export default function ChallengeMemberBoard({
  members,
}: ChallengeMemberBoardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.sectionTitle}>MEMBERS ({members.length})</Text>

      {members.map((member) => (
        <View key={member.id} style={styles.memberRow}>
          <View
            style={[styles.memberAvatar, { backgroundColor: member.color }]}
          >
            <Text style={styles.memberInitials}>{member.initials}</Text>
          </View>

          <Text style={styles.memberName}>{member.name}</Text>

          <Text style={styles.memberWeight}>{member.weight} lbs</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#111827",
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: "#1F2937",
    marginBottom: 24,
  },
  sectionTitle: {
    color: "#4C9DFF",
    fontSize: 13,
    fontWeight: "900",
    letterSpacing: 1.8,
    marginBottom: 22,
  },
  memberRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },
  memberAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 18,
  },
  memberInitials: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "900",
  },
  memberName: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "900",
  },
  memberWeight: {
    color: "#6B7280",
    fontSize: 16,
    fontWeight: "700",
  },
});
