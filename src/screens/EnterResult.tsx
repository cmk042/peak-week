import { ScrollView, StyleSheet, Text } from "react-native";
import TypeSelect from "../components/TypeSelect";
import ResultEnter from "../components/ResultEnter";
import { useState } from "react";

export default function EventResult() {
  const [selectedEventId, setSelectedEventId] = useState("bench");
  const [selectedTypeId, setSelectedTypeId] = useState("current");
  const [resultValue, setResultValue] = useState("");

  const selectedEvent = mockEvents.find(
    (event) => event.id === selectedEventId,
  );
  const selectedType = mockTypes.find((type) => type.id === selectedTypeId);
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>Log Result</Text>
      <Text style={styles.subtitle}>
        Track your performance for the challenge
      </Text>

      <TypeSelect
        title="EVENT"
        items={mockEvents}
        selectedId={selectedEventId}
        onSelect={setSelectedEventId}
      />

      <TypeSelect
        title="TYPE"
        items={mockTypes}
        selectedId={selectedTypeId}
        onSelect={setSelectedTypeId}
      />

      <ResultEnter
        value={resultValue}
        onChangeValue={setResultValue}
        unit={selectedEvent?.unit ?? ""}
        helperText={
          selectedEvent?.higherIsBetter
            ? `✅ Higher is better. Your ${selectedType?.label.toLowerCase()}: ${resultValue} ${selectedEvent.unit}.`
            : `✅ Lower is better. Your ${selectedType?.label.toLowerCase()}: ${resultValue} ${selectedEvent?.unit}.`
        }
      />
    </ScrollView>
  );
}

const mockEvents = [
  {
    id: "bench",
    icon: "🏋️‍♂️",
    label: "Bench",
    unit: "lbs",
    higherIsBetter: true,
  },
  {
    id: "squat",
    icon: "🦵",
    label: "Squat",
    unit: "lbs",
    higherIsBetter: true,
  },
  {
    id: "vertical",
    icon: "⬆️",
    label: "Vertical",
    unit: "in",
    higherIsBetter: true,
  },
  {
    id: "dash100",
    icon: "💨",
    label: "100m",
    unit: "sec",
    higherIsBetter: false,
  },
  {
    id: "mile",
    icon: "🏃",
    label: "Mile",
    unit: "sec",
    higherIsBetter: false,
  },
  {
    id: "pullups",
    icon: "💪",
    label: "Pull",
    unit: "reps",
    higherIsBetter: true,
  },
];

const mockTypes = [
  {
    id: "baseline",
    label: "Baseline",
  },
  {
    id: "current",
    label: "Current",
  },
  {
    id: "final",
    label: "Final",
  },
  {
    id: "pr",
    label: "PR",
  },
];

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
  title: {
    color: "#FFFFFF",
    fontSize: 34,
    fontWeight: "900",
    letterSpacing: -1.8,
    lineHeight: 38,
  },
  subtitle: {
    color: "#6B7280",
    fontSize: 17,
    fontWeight: "700",
    marginTop: 10,
    marginBottom: 34,
  },
});
