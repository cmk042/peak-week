import { ScrollView, StyleSheet, View, Text } from "react-native";
import ProfileCard from "../components/ProfileCard";
import PRCard from "../components/PRCard";

export default function Profile() {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <ProfileCard
        initials="CK"
        name="Casey King"
        height={`6'0"`}
        weight="200 lbs"
        groupRank={3}
        averageImprovement={21.4}
        eventCount={7}
      />
      <Text style={styles.sectionTitle}>All Time Personal Records:</Text>
      <View style={styles.grid}>
        {mockPRs.map((pr, index) => (
          <PRCard
            key={index}
            icon={pr.icon}
            value={pr.value}
            label={pr.label}
            unit={pr.unit}
          />
        ))}
      </View>
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
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#81d1ff",
    marginTop: 10,
    marginBottom: 8,
  },
});

type PRCardProps = {
  icon: string;
  value: string | number;
  label: string;
  unit?: string;
};

const mockPRs: PRCardProps[] = [
  {
    icon: "🏋️‍♂️",
    value: 225,
    label: "Bench Press",
    unit: "lbs",
  },
  {
    icon: "🦵",
    value: 315,
    label: "Squat",
    unit: "lbs",
  },
  {
    icon: "⬆️",
    value: 30,
    label: "Vertical Jump",
    unit: "in",
  },
  {
    icon: "💨",
    value: 13.2,
    label: "100m Dash",
    unit: "sec",
  },
  {
    icon: "🏃",
    value: "6:21",
    label: "Mile",
  },
  {
    icon: "💪",
    value: 15,
    label: "Pull-ups",
    unit: "reps",
  },
];
