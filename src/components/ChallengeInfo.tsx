import { View, Text, StyleSheet } from "react-native";

export default function ChallengeInfo() {
  return (
    <View style={styles.card}>
      <Text style={styles.sectionTitle}>CHALLENGE INFO</Text>

      <Text style={styles.label}>Challenge Name</Text>
      <View style={styles.inputLarge}>
        <Text style={styles.inputText}>Summer Athletic Peak</Text>
        <Text style={styles.editIcon}>⌕</Text>
      </View>
      <View style={styles.dateRow}>
        <View style={styles.dateColumn}>
          <Text style={styles.label}>Start Date</Text>
          <View style={styles.inputSmall}>
            <Text style={styles.inputTextSmall}>Jun 12, 2025</Text>
            <Text style={styles.editIconSmall}>⌕</Text>
          </View>
        </View>

        <View style={styles.dateColumn}>
          <Text style={styles.label}>End Date</Text>
          <View style={styles.inputSmall}>
            <Text style={styles.inputTextSmall}>Jul 10, 2025</Text>
            <Text style={styles.editIconSmall}>⌕</Text>
          </View>
        </View>
      </View>
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
  label: {
    color: "#6B7280",
    fontSize: 14,
    fontWeight: "800",
    marginBottom: 12,
  },
  inputLarge: {
    height: 66,
    borderRadius: 24,
    backgroundColor: "#1A2033",
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 22,
  },
  inputText: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "900",
  },
  editIcon: {
    color: "#6B7280",
    fontSize: 20,
    transform: [{ rotate: "-35deg" }],
  },
  dateRow: {
    flexDirection: "row",
    gap: 14,
  },
  dateColumn: {
    flex: 1,
  },
  inputSmall: {
    height: 60,
    borderRadius: 22,
    backgroundColor: "#1A2033",
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputTextSmall: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
  },
  editIconSmall: {
    color: "#6B7280",
    fontSize: 17,
    transform: [{ rotate: "-35deg" }],
  },
});
