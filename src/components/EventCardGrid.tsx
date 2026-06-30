import { StyleSheet, Text, View } from "react-native";
import EventCard from "./EventCard";

type EventSummary = {
  eventId: string;
  eventName: string;
  icon: string;
  leaderName: string;
  topImproverName: string;
  improvement: number;
};

type EventCardGridProps = {
  events: EventSummary[];
  onPressEvent: (eventId: string) => void;
};

export default function EventCardGrid({
  events,
  onPressEvent,
}: EventCardGridProps) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>EVENT BREAKDOWN</Text>

      <View style={styles.grid}>
        {events.map((event) => (
          <EventCard
            key={event.eventId}
            eventName={event.eventName}
            icon={event.icon}
            leaderName={event.leaderName}
            topImproverName={event.topImproverName}
            improvementPercent={event.improvement}
            onPress={() => onPressEvent(event.eventId)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginTop: 4,
  },
  sectionTitle: {
    color: "#4C9DFF",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.6,
    marginBottom: 12,
    textTransform: "uppercase",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
});
