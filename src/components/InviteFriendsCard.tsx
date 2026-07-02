import { View, Text, Pressable, StyleSheet } from "react-native";
export default function InviteFriendsCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.sectionTitle}>INVITE FRIENDS</Text>

      <View style={styles.inviteCodeRow}>
        <Text style={styles.inviteCode}>PEAK-2847</Text>
        <Pressable>
          <Text style={styles.copyText}>▢ Copy</Text>
        </Pressable>
      </View>

      <Pressable style={styles.shareButton}>
        <Text style={styles.shareText}>⌘ Share Invite Link</Text>
      </Pressable>
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
  inviteCodeRow: {
    height: 72,
    borderRadius: 24,
    backgroundColor: "#1A2033",
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  inviteCode: {
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: "900",
    letterSpacing: 2,
  },
  copyText: {
    color: "#4C9DFF",
    fontSize: 16,
    fontWeight: "900",
  },
  shareButton: {
    height: 66,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#29324A",
    backgroundColor: "#1A2033",
    alignItems: "center",
    justifyContent: "center",
  },
  shareText: {
    color: "#E5E7EB",
    fontSize: 18,
    fontWeight: "900",
  },
});
