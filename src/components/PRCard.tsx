import { StyleSheet, Text, View } from "react-native";

type PRCardProps = {
  icon: string;
  value: string | number;
  label: string;
  unit?: string;
};

export default function PRCard({ icon, value, label, unit }: PRCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.value}>
        {value} {unit && <Text style={styles.unit}>{unit}</Text>}
      </Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48%",
    backgroundColor: "#111827",
    borderRadius: 22,
    paddingVertical: 18,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#1F2937",
  },
  icon: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "700",
  },
  value: {
    color: "white",
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 4,
  },
  label: {
    color: "#8B92A5",
    fontSize: 14,
    fontWeight: "500",
  },
  unit: {
    color: "#8B92A5",
    fontSize: 14,
    fontWeight: "500",
  },
});
