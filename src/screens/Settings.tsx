import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";
import ChallengeInfo from "../components/ChallengeInfo";
import InviteFriendsCard from "../components/InviteFriendsCard";
import EventSettings from "../components/EventSettings";
import ChallengeMemberBoard from "../components/ChallengeMemberBoard";

type EventSetting = {
  id: string;
  icon: string;
  name: string;
  unit: string;
  higherIsBetter: boolean;
  enabled: boolean;
};

type Member = {
  id: string;
  initials: string;
  name: string;
  weight: number;
  color: string;
};

export default function Settings() {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.subtitle}>Manage your challenge</Text>

      <ChallengeInfo />

      <EventSettings events={mockEvents} />

      <InviteFriendsCard />
      <ChallengeMemberBoard members={mockMembers} />
    </ScrollView>
  );
}

const mockEvents: EventSetting[] = [
  {
    id: "bench",
    icon: "🏋️‍♂️",
    name: "Bench Press",
    unit: "lbs",
    higherIsBetter: true,
    enabled: true,
  },
  {
    id: "squat",
    icon: "🦵",
    name: "Squat",
    unit: "lbs",
    higherIsBetter: true,
    enabled: true,
  },
  {
    id: "vertical",
    icon: "⬆️",
    name: "Vertical Jump",
    unit: "in",
    higherIsBetter: true,
    enabled: true,
  },
  {
    id: "dash100",
    icon: "💨",
    name: "100m Dash",
    unit: "sec",
    higherIsBetter: false,
    enabled: true,
  },
  {
    id: "mile",
    icon: "🏃",
    name: "Mile Run",
    unit: "sec",
    higherIsBetter: false,
    enabled: true,
  },
  {
    id: "pullups",
    icon: "💪",
    name: "Pull-ups",
    unit: "reps",
    higherIsBetter: true,
    enabled: true,
  },
];

const mockMembers: Member[] = [
  {
    id: "casey",
    initials: "C",
    name: "Casey",
    weight: 175,
    color: "#3B82F6",
  },
  {
    id: "jacob",
    initials: "J",
    name: "Jacob",
    weight: 195,
    color: "#F97316",
  },
  {
    id: "steve",
    initials: "S",
    name: "Steve",
    weight: 210,
    color: "#22C55E",
  },
  {
    id: "maya",
    initials: "M",
    name: "Maya",
    weight: 135,
    color: "#A855F7",
  },
  {
    id: "sarah",
    initials: "Sa",
    name: "Sarah",
    weight: 128,
    color: "#EC4899",
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
  card: {
    backgroundColor: "#111827",
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: "#1F2937",
    marginBottom: 24,
  },
  sectionTitle: {
    color: "#4C9DFF",
    fontSize: 13,
    fontWeight: "900",
    letterSpacing: 1.8,
    marginBottom: 22,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  customText: {
    color: "#4C9DFF",
    fontSize: 15,
    fontWeight: "800",
    marginBottom: 22,
  },
  label: {
    color: "#6B7280",
    fontSize: 14,
    fontWeight: "800",
    marginBottom: 12,
  },
  inputLarge: {
    height: 66,
    borderRadius: 24,
    backgroundColor: "#1A2033",
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 22,
  },
  inputText: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "900",
  },
  editIcon: {
    color: "#6B7280",
    fontSize: 20,
    transform: [{ rotate: "-35deg" }],
  },
  dateRow: {
    flexDirection: "row",
    gap: 14,
  },
  dateColumn: {
    flex: 1,
  },
  inputSmall: {
    height: 60,
    borderRadius: 22,
    backgroundColor: "#1A2033",
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputTextSmall: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
  },
  editIconSmall: {
    color: "#6B7280",
    fontSize: 17,
    transform: [{ rotate: "-35deg" }],
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
  inviteCodeRow: {
    height: 72,
    borderRadius: 24,
    backgroundColor: "#1A2033",
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  inviteCode: {
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: "900",
    letterSpacing: 2,
  },
  copyText: {
    color: "#4C9DFF",
    fontSize: 16,
    fontWeight: "900",
  },
  shareButton: {
    height: 66,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#29324A",
    backgroundColor: "#1A2033",
    alignItems: "center",
    justifyContent: "center",
  },
  shareText: {
    color: "#E5E7EB",
    fontSize: 18,
    fontWeight: "900",
  },
  memberRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },
  memberAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 18,
  },
  memberInitials: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "900",
  },
  memberName: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "900",
  },
  memberWeight: {
    color: "#6B7280",
    fontSize: 16,
    fontWeight: "700",
  },
});
