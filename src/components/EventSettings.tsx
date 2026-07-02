import { StyleSheet, Text, View } from "react-native";

type EventSetting = {
  id: string;
  icon: string;
  name: string;
  unit: string;
  higherIsBetter: boolean;
  enabled: boolean;
};

type EventSettingsProps = {
  events: EventSetting[];
};

export default function EventSettings({ events }: EventSettingsProps) {
  return (
    <View style={styles.card}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>EVENTS</Text>
        <Text style={styles.customText}>＋ Custom</Text>
      </View>

      {events.map((event, index) => (
        <View key={event.id}>
          <View style={styles.eventRow}>
            <Text style={styles.eventIcon}>{event.icon}</Text>

            <View style={styles.eventInfo}>
              <Text style={styles.eventName}>{event.name}</Text>
              <Text style={styles.eventMeta}>
                {event.unit} ·{" "}
                {event.higherIsBetter ? "Higher better" : "Lower better"}
              </Text>
            </View>

            <View style={[styles.toggle, event.enabled && styles.toggleOn]}>
              <View style={styles.toggleKnob} />
            </View>
          </View>

          {index !== events.length - 1 && <View style={styles.divider} />}
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
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sectionTitle: {
    color: "#4C9DFF",
    fontSize: 13,
    fontWeight: "900",
    letterSpacing: 1.8,
    marginBottom: 22,
  },
  customText: {
    color: "#4C9DFF",
    fontSize: 15,
    fontWeight: "800",
    marginBottom: 22,
  },
  eventRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
  },
  eventIcon: {
    width: 44,
    fontSize: 25,
  },
  eventInfo: {
    flex: 1,
  },
  eventName: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "900",
    marginBottom: 4,
  },
  eventMeta: {
    color: "#6B7280",
    fontSize: 14,
    fontWeight: "700",
  },
  toggle: {
    width: 58,
    height: 34,
    borderRadius: 999,
    backgroundColor: "#374151",
    padding: 3,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  toggleOn: {
    backgroundColor: "#3B82F6",
    alignItems: "flex-end",
  },
  toggleKnob: {
    width: 28,
    height: 28,
    borderRadius: 999,
    backgroundColor: "#FFFFFF",
  },
  divider: {
    height: 1,
    backgroundColor: "#1F2937",
    marginLeft: 44,
  },
});
