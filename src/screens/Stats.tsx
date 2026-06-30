import { useMemo, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";

import DashHeader from "../components/DashHeader";
import EventCardGrid from "../components/EventCardGrid";
import EventFilterTabs from "../components/EventFilterTabs";
import ImprovementBargraph from "../components/ImprovementBargraph";

type Event = {
  id: string;
  name: string;
  shortName: string;
  icon: string;
  unit: string;
  higherIsBetter: boolean;
};

type ImproverRow = {
  participantId: string;
  name: string;
  initials: string;
  improvement: number;
  color: string;
};

type EventSummary = {
  eventId: string;
  eventName: string;
  icon: string;
  leaderName: string;
  topImproverName: string;
  improvement: number;
};

type ImproversByEvent = Record<string, ImproverRow[]>;

function getEventName(eventId: string) {
  return mockEvents.find((event) => event.id === eventId)?.name ?? "Event";
}

export default function Stats() {
  const [selectedEventId, setSelectedEventId] = useState("overall");

  const filteredImprovers = useMemo(() => {
    if (selectedEventId === "overall") {
      return mockImprovers;
    }

    return mockImproversByEvent[selectedEventId] ?? [];
  }, [selectedEventId]);

  const graphTitle =
    selectedEventId === "overall"
      ? "% IMPROVEMENT — ALL EVENTS"
      : `% IMPROVEMENT — ${getEventName(selectedEventId).toUpperCase()}`;

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <DashHeader challengeName="Summer Athletic Peak" daysLeft={3} />

      <EventFilterTabs
        events={mockEvents}
        selectedEventId={selectedEventId}
        onSelectEvent={setSelectedEventId}
      />

      <ImprovementBargraph title={graphTitle} rows={filteredImprovers} />

      <EventCardGrid events={mockEventSummaries} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#0B1020",
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 64,
    paddingBottom: 130,
  },
});

const mockEvents: Event[] = [
  {
    id: "bench",
    name: "Bench Press",
    shortName: "Bench",
    icon: "🏋️‍♂️",
    unit: "lb",
    higherIsBetter: true,
  },
  {
    id: "squat",
    name: "Squat",
    shortName: "Squat",
    icon: "🦵",
    unit: "lb",
    higherIsBetter: true,
  },
  {
    id: "vertical",
    name: "Vertical Jump",
    shortName: "Vertical",
    icon: "⬆️",
    unit: "in",
    higherIsBetter: true,
  },
  {
    id: "dash100",
    name: "100m Dash",
    shortName: "100m",
    icon: "💨",
    unit: "sec",
    higherIsBetter: false,
  },
  {
    id: "mile",
    name: "Mile",
    shortName: "Mile",
    icon: "🏃",
    unit: "time",
    higherIsBetter: false,
  },
  {
    id: "pullups",
    name: "Pull-ups",
    shortName: "Pull-ups",
    icon: "💪",
    unit: "reps",
    higherIsBetter: true,
  },
];

const mockImprovers: ImproverRow[] = [
  {
    participantId: "sarah",
    name: "Sarah",
    initials: "S",
    improvement: 45.0,
    color: "#EC4899",
  },
  {
    participantId: "maya",
    name: "Maya",
    initials: "M",
    improvement: 25.8,
    color: "#A855F7",
  },
  {
    participantId: "casey",
    name: "Casey",
    initials: "C",
    improvement: 21.4,
    color: "#3B82F6",
  },
  {
    participantId: "jacob",
    name: "Jacob",
    initials: "J",
    improvement: 18.4,
    color: "#F97316",
  },
  {
    participantId: "steve",
    name: "Steve",
    initials: "S",
    improvement: 13.7,
    color: "#22C55E",
  },
];

const mockEventSummaries: EventSummary[] = [
  {
    eventId: "bench",
    eventName: "Bench Press",
    icon: "🏋️‍♂️",
    leaderName: "Steve",
    topImproverName: "Sarah",
    improvement: 38.5,
  },
  {
    eventId: "squat",
    eventName: "Squat",
    icon: "🦵",
    leaderName: "Steve",
    topImproverName: "Sarah",
    improvement: 30.4,
  },
  {
    eventId: "vertical",
    eventName: "Vertical Jump",
    icon: "⬆️",
    leaderName: "Steve",
    topImproverName: "Casey",
    improvement: 25.0,
  },
  {
    eventId: "dash100",
    eventName: "100m Dash",
    icon: "💨",
    leaderName: "Jacob",
    topImproverName: "Jacob",
    improvement: 6.2,
  },
  {
    eventId: "mile",
    eventName: "Mile",
    icon: "🏃",
    leaderName: "Maya",
    topImproverName: "Maya",
    improvement: 12.8,
  },
  {
    eventId: "pullups",
    eventName: "Pull-ups",
    icon: "💪",
    leaderName: "Casey",
    topImproverName: "Casey",
    improvement: 22.1,
  },
];

const mockImproversByEvent: ImproversByEvent = {
  bench: [
    {
      participantId: "sarah",
      name: "Sarah",
      initials: "S",
      improvement: 38.5,
      color: "#EC4899",
    },
    {
      participantId: "casey",
      name: "Casey",
      initials: "C",
      improvement: 22.1,
      color: "#3B82F6",
    },
  ],
  squat: [
    {
      participantId: "sarah",
      name: "Sarah",
      initials: "S",
      improvement: 30.4,
      color: "#EC4899",
    },
  ],
  vertical: [
    {
      participantId: "casey",
      name: "Casey",
      initials: "C",
      improvement: 25.0,
      color: "#3B82F6",
    },
  ],
  dash100: [
    {
      participantId: "jacob",
      name: "Jacob",
      initials: "J",
      improvement: 6.2,
      color: "#F97316",
    },
  ],
  mile: [
    {
      participantId: "maya",
      name: "Maya",
      initials: "M",
      improvement: 12.8,
      color: "#A855F7",
    },
  ],
  pullups: [
    {
      participantId: "casey",
      name: "Casey",
      initials: "C",
      improvement: 22.1,
      color: "#3B82F6",
    },
  ],
};
