import { View } from "react-native";

type EventCardGridProps = {
  events: {
    eventId: string;
    eventName: string;
    icon: string;
    leaderName: string;
    topImproverName: string;
    improvement: number;
  }[];
};

export default function EventCardGrid({ events }: EventCardGridProps) {
  return <View></View>;
}
