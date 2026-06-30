import { StyleSheet, Text, View } from "react-native";
import EventCard from "./EventCard";

type EventCard = {
  eventId: string;
  eventName: string;
  icon: string;
  leaderName: string;
  topImproverName: string;
  improvement: number;
};

type EventCardGridProps = {
  events: EventCard[];
};

export default function EventCardGrid({ events }: EventCardGridProps) {
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
