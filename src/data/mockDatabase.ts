export type Participant = {
  id: string;
  name: string;
  initials: string;
  color: string;
  height: string;
  weight: number;
};

export type Activity = {
  id: string;
  text: string;
  time: string;
};

export type ChallengeEvent = {
  id: string;
  name: string;
  shortName: string;
  icon: string;
  unit: string;
  higherIsBetter: boolean;
  enabled: boolean;
};

export type ResultType = "baseline" | "current" | "final" | "pr";

export type Result = {
  id: string;
  participantId: string;
  eventId: string;
  type: ResultType;
  value: number | string;
};

export type Challenge = {
  id: string;
  name: string;
  inviteCode: string;
  startDate: string;
  endDate: string;
  currentUserId: string;
  participantIds: string[];
  eventIds: string[];
};

export const mockChallenge: Challenge = {
  id: "summer-athletic-peak",
  name: "Summer Athletic Peak",
  inviteCode: "PEAK-2847",
  startDate: "2025-06-12",
  endDate: "2025-07-10",
  currentUserId: "casey",
  participantIds: ["casey", "jacob", "steve", "maya", "sarah"],
  eventIds: ["bench", "squat", "vertical", "dash100", "mile", "pullups"],
};

export const mockParticipants: Participant[] = [
  {
    id: "casey",
    name: "Casey",
    initials: "C",
    color: "#3B82F6",
    height: `6'0"`,
    weight: 200,
  },
  {
    id: "jacob",
    name: "Jacob",
    initials: "J",
    color: "#F97316",
    height: `6'1"`,
    weight: 195,
  },
  {
    id: "steve",
    name: "Steve",
    initials: "S",
    color: "#22C55E",
    height: `6'2"`,
    weight: 210,
  },
  {
    id: "maya",
    name: "Maya",
    initials: "M",
    color: "#A855F7",
    height: `5'6"`,
    weight: 135,
  },
  {
    id: "sarah",
    name: "Sarah",
    initials: "Sa",
    color: "#EC4899",
    height: `5'5"`,
    weight: 128,
  },
];

export const mockActivities: Activity[] = [
  {
    id: "1",
    text: "Sarah improved her bench press by 38.5%",
    time: "2h ago",
  },
  {
    id: "2",
    text: "Casey hit a new pull-up PR",
    time: "Yesterday",
  },
  {
    id: "3",
    text: "Maya entered final vertical jump",
    time: "2 days ago",
  },
];

export const mockEvents: ChallengeEvent[] = [
  {
    id: "bench",
    name: "Bench Press",
    shortName: "Bench",
    icon: "🏋️‍♂️",
    unit: "lbs",
    higherIsBetter: true,
    enabled: true,
  },
  {
    id: "squat",
    name: "Squat",
    shortName: "Squat",
    icon: "🦵",
    unit: "lbs",
    higherIsBetter: true,
    enabled: true,
  },
  {
    id: "vertical",
    name: "Vertical Jump",
    shortName: "Vertical",
    icon: "⬆️",
    unit: "in",
    higherIsBetter: true,
    enabled: true,
  },
  {
    id: "dash100",
    name: "100m Dash",
    shortName: "100m",
    icon: "💨",
    unit: "sec",
    higherIsBetter: false,
    enabled: true,
  },
  {
    id: "mile",
    name: "Mile Run",
    shortName: "Mile",
    icon: "🏃",
    unit: "time",
    higherIsBetter: false,
    enabled: true,
  },
  {
    id: "pullups",
    name: "Pull-ups",
    shortName: "Pull-ups",
    icon: "💪",
    unit: "reps",
    higherIsBetter: true,
    enabled: true,
  },
];

export const mockResults: Result[] = [
  // Casey
  {
    id: "r1",
    participantId: "casey",
    eventId: "bench",
    type: "baseline",
    value: 185,
  },
  {
    id: "r2",
    participantId: "casey",
    eventId: "bench",
    type: "current",
    value: 225,
  },
  {
    id: "r3",
    participantId: "casey",
    eventId: "squat",
    type: "baseline",
    value: 275,
  },
  {
    id: "r4",
    participantId: "casey",
    eventId: "squat",
    type: "current",
    value: 315,
  },
  {
    id: "r5",
    participantId: "casey",
    eventId: "vertical",
    type: "baseline",
    value: 24,
  },
  {
    id: "r6",
    participantId: "casey",
    eventId: "vertical",
    type: "current",
    value: 30,
  },
  {
    id: "r7",
    participantId: "casey",
    eventId: "dash100",
    type: "baseline",
    value: 14.0,
  },
  {
    id: "r8",
    participantId: "casey",
    eventId: "dash100",
    type: "current",
    value: 13.2,
  },
  {
    id: "r9",
    participantId: "casey",
    eventId: "mile",
    type: "baseline",
    value: "7:06",
  },
  {
    id: "r10",
    participantId: "casey",
    eventId: "mile",
    type: "current",
    value: "6:21",
  },
  {
    id: "r11",
    participantId: "casey",
    eventId: "pullups",
    type: "baseline",
    value: 12,
  },
  {
    id: "r12",
    participantId: "casey",
    eventId: "pullups",
    type: "current",
    value: 15,
  },

  // Steve
  {
    id: "r13",
    participantId: "steve",
    eventId: "bench",
    type: "baseline",
    value: 245,
  },
  {
    id: "r14",
    participantId: "steve",
    eventId: "bench",
    type: "current",
    value: 275,
  },

  // Jacob
  {
    id: "r15",
    participantId: "jacob",
    eventId: "bench",
    type: "baseline",
    value: 225,
  },
  {
    id: "r16",
    participantId: "jacob",
    eventId: "bench",
    type: "current",
    value: 265,
  },

  // Maya
  {
    id: "r17",
    participantId: "maya",
    eventId: "bench",
    type: "baseline",
    value: 85,
  },
  {
    id: "r18",
    participantId: "maya",
    eventId: "bench",
    type: "current",
    value: 105,
  },

  // Sarah
  {
    id: "r19",
    participantId: "sarah",
    eventId: "bench",
    type: "baseline",
    value: 65,
  },
  {
    id: "r20",
    participantId: "sarah",
    eventId: "bench",
    type: "current",
    value: 90,
  },
];
