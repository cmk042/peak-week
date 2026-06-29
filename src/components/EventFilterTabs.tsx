import { ScrollView, Pressable, StyleSheet, Text } from "react-native";

type EventFilterTabsProps = {
  events: {
    id: string;
    name: string;
    shortName: string;
    icon: string;
    unit: string;
    higherIsBetter: boolean;
  }[];
  selectedEventId: string;
  onSelectEvent?: (eventId: string) => void;
};

export default function EventFilterTabs({
  events,
  selectedEventId,
  onSelectEvent,
}: EventFilterTabsProps) {
  const tabs = [
    {
      id: "overall",
      shortName: "Overall",
    },
    ...events,
  ];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {tabs.map((event) => {
        const isSelected = event.id === selectedEventId;

        return (
          <Pressable
            key={event.id}
            onPress={() => onSelectEvent?.(event.id)}
            style={[styles.tab, isSelected && styles.activeTab]}
          >
            <Text style={[styles.tabText, isSelected && styles.activeTabText]}>
              {event.shortName}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
    paddingVertical: 8,
    marginBottom: 20,
  },
  tab: {
    backgroundColor: "#1A1B2A",
    paddingHorizontal: 20,
    paddingVertical: 11,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
  },
  activeTab: {
    backgroundColor: "#3B82F6",
  },
  tabText: {
    color: "#8B92A5",
    fontSize: 15,
    fontWeight: "800",
  },
  activeTabText: {
    color: "#FFFFFF",
  },
});
