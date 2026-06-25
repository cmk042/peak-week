import { StyleSheet, Text, View } from "react-native";

type StatCardProps = {
  icon: string;
  value: string | number;
  label: string;
  iconColor?: string;
};

export default function StatCard({
  icon,
  value,
  label,
  iconColor = "#3B82F6",
}: StatCardProps) {
  return (
    <View style={styles.card}>
      <Text style={[styles.icon, { color: iconColor }]}>{icon}</Text>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
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
});
