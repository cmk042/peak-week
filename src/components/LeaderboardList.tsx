import { StyleSheet, View } from "react-native";
import LeaderboardCard from "./LeaderboardCard";

type LeaderboardRow = {
  rank: number;
  name: string;
  initials: string;
  color: string;
  unit: string;
  value: number;
  improvement: number;
  baseline: number;
  pr: boolean;
  absolute: boolean;
};

type LeaderboardListProps = {
  events: LeaderboardRow[];
};

export default function LeaderboardList({ events }: LeaderboardListProps) {
  return (
    <View style={styles.list}>
      {events.map((event) => (
        <LeaderboardCard
          key={event.rank}
          rank={event.rank}
          name={event.name}
          initials={event.initials}
          color={event.color}
          unit={event.unit}
          value={event.value}
          improvement={event.improvement}
          baseline={event.baseline}
          pr={event.pr}
          absolute={event.absolute}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    gap: 12,
  },
});
