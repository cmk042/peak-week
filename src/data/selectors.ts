import {
  mockEvents,
  mockParticipants,
  mockResults,
  ChallengeEvent,
  Participant,
  mockChallenge,
  mockActivities,
} from "./mockDatabase";

import { MOCK_TODAY } from "./mockConfig";

export function getDaysLeft() {
  const endDate = new Date(mockChallenge.endDate);

  const msPerDay = 1000 * 60 * 60 * 24;
  const diff = endDate.getTime() - MOCK_TODAY.getTime();

  return Math.max(0, Math.ceil(diff / msPerDay));
}

export function getChallengeProgress() {
  const startDate = new Date(mockChallenge.startDate);
  const endDate = new Date(mockChallenge.endDate);

  const totalMs = endDate.getTime() - startDate.getTime();
  const elapsedMs = MOCK_TODAY.getTime() - startDate.getTime();

  return Math.min(1, Math.max(0, elapsedMs / totalMs));
}

export function getChallenge() {
  return mockChallenge;
}

export function getRealDaysLeft() {
  const today = new Date();
  const endDate = new Date(mockChallenge.endDate);

  const msPerDay = 1000 * 60 * 60 * 24;
  const diff = endDate.getTime() - today.getTime();

  return Math.max(0, Math.ceil(diff / msPerDay));
}

export function getRealChallengeProgress() {
  const today = new Date();
  const startDate = new Date(mockChallenge.startDate);
  const endDate = new Date(mockChallenge.endDate);

  const totalMs = endDate.getTime() - startDate.getTime();
  const elapsedMs = today.getTime() - startDate.getTime();

  const progress = elapsedMs / totalMs;

  return Math.min(1, Math.max(0, progress));
}

function getNumberValue(value: number | string) {
  if (typeof value === "number") return value;
  return Number(value);
}

export function getEventById(eventId: string) {
  return mockEvents.find((event) => event.id === eventId);
}

export function getCurrentUser() {
  return mockParticipants.find((participant) => participant.id === "casey");
}

export function getResult(
  participantId: string,
  eventId: string,
  type: "baseline" | "current" | "final" | "pr",
) {
  return mockResults.find(
    (result) =>
      result.participantId === participantId &&
      result.eventId === eventId &&
      result.type === type,
  );
}

export function getEventLeaderboard(eventId: string) {
  const event = getEventById(eventId);
  if (!event) return [];

  const rows = mockParticipants
    .map((participant) => {
      const baseline = getResult(participant.id, eventId, "baseline");
      const current = getResult(participant.id, eventId, "current");

      if (!baseline || !current) return null;

      const baselineValue = getNumberValue(baseline.value);
      const currentValue = getNumberValue(current.value);

      const improvement = event.higherIsBetter
        ? ((currentValue - baselineValue) / baselineValue) * 100
        : ((baselineValue - currentValue) / baselineValue) * 100;

      return {
        participantId: participant.id,
        name: participant.name,
        initials: participant.initials,
        color: participant.color,
        unit: event.unit,
        value: current.value,
        baseline: baseline.value,
        improvement,
        pr: true,
      };
    })
    .filter(Boolean) as any[];

  return rows
    .sort((a, b) => {
      const aValue = getNumberValue(a.value);
      const bValue = getNumberValue(b.value);

      return event.higherIsBetter ? bValue - aValue : aValue - bValue;
    })
    .map((row, index) => ({
      ...row,
      rank: index + 1,
      absolute: true,
    }));
}

export function getEventImprovementLeaderboard(eventId: string) {
  return getEventLeaderboard(eventId)
    .sort((a, b) => b.improvement - a.improvement)
    .map((row, index) => ({
      ...row,
      rank: index + 1,
      absolute: false,
    }));
}

export function getOverallImprovementLeaderboard() {
  const enabledEvents = mockEvents.filter((event) => event.enabled);

  const rows = mockParticipants
    .map((participant) => {
      const improvements = enabledEvents
        .map((event) => {
          const baseline = getResult(participant.id, event.id, "baseline");
          const current = getResult(participant.id, event.id, "current");

          if (!baseline || !current) return null;

          const baselineValue = getNumberValue(baseline.value);
          const currentValue = getNumberValue(current.value);

          if (!baselineValue || !currentValue) return null;

          const improvement = event.higherIsBetter
            ? ((currentValue - baselineValue) / baselineValue) * 100
            : ((baselineValue - currentValue) / baselineValue) * 100;

          return improvement;
        })
        .filter((value): value is number => value !== null);

      if (improvements.length === 0) return null;

      const averageImprovement =
        improvements.reduce((sum, value) => sum + value, 0) /
        improvements.length;

      return {
        participantId: participant.id,
        name: participant.name,
        initials: participant.initials,
        color: participant.color,
        improvement: averageImprovement,
      };
    })
    .filter((row): row is NonNullable<typeof row> => row !== null);

  return rows
    .sort((a, b) => b.improvement - a.improvement)
    .map((row, index) => ({
      ...row,
      rank: index + 1,
    }));
}

export function getFriendCount() {
  return mockChallenge.participantIds.length;
}

export function getEnabledEventCount() {
  return mockEvents.filter((event) => event.enabled).length;
}

export function getRecentActivity() {
  return mockActivities;
}

export function getChallengeDayInfo() {
  const startDate = new Date(mockChallenge.startDate);
  const endDate = new Date(mockChallenge.endDate);

  const msPerDay = 1000 * 60 * 60 * 24;

  const totalDays = Math.ceil(
    (endDate.getTime() - startDate.getTime()) / msPerDay,
  );

  const elapsedDays = Math.ceil(
    (MOCK_TODAY.getTime() - startDate.getTime()) / msPerDay,
  );

  const daysLeft = Math.max(
    0,
    Math.ceil((endDate.getTime() - MOCK_TODAY.getTime()) / msPerDay),
  );

  return {
    daysLeft,
    currentDay: Math.min(totalDays, Math.max(1, elapsedDays)),
    totalDays,
    endDateLabel: endDate.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
  };
}

export function getNewPRCount() {
  return mockResults.filter((result) => result.type === "pr").length;
}
