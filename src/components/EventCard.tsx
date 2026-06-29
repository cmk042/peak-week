import { View } from "react-native";

type EventCardProps = {
  eventName: string;
  icon: string;
  leaderName: string;
  topImproverName: string;
  improvementPercent: number;
};

export default function EventCard({
  eventName,
  icon,
  leaderName,
  topImproverName,
  improvementPercent,
}: EventCardProps) {
  return <View></View>;
}
