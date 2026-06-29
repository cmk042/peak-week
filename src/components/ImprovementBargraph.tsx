import { StyleSheet, Text, View } from "react-native";

type ImprovementBargraphProps = {
  title: string;
  rows: {
    participantId: string;
    name: string;
    initials: string;
    improvement: number;
    color: string;
  }[];
};

const NAME_WIDTH = 64;
const BAR_SHIFT_LEFT = 18;

export function getTicks(maxPercent: number): number[] {
  const tickSize = maxPercent / 4;
  return [0, tickSize, tickSize * 2, tickSize * 3, maxPercent];
}

function formatTick(value: number) {
  if (value === 0) return "0%";
  if (Number.isInteger(value)) return `${value}%`;
  return `${value.toFixed(2)}%`;
}

export default function ImprovementBargraph({
  title,
  rows,
}: ImprovementBargraphProps) {
  const maxImprovement = Math.max(...rows.map((row) => row.improvement), 1);
  const ticks = getTicks(maxImprovement);

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.graph}>
        {rows.map((row) => {
          const widthPercent = (row.improvement / maxImprovement) * 100;

          return (
            <View key={row.participantId} style={styles.row}>
              <Text style={styles.name}>{row.name}</Text>

              <View style={styles.barTrack}>
                <View
                  style={[
                    styles.bar,
                    {
                      width: `${widthPercent}%`,
                      backgroundColor: row.color,
                    },
                  ]}
                />
              </View>
            </View>
          );
        })}

        <View style={styles.axisRow}>
          <View style={styles.axisTrack}>
            {ticks.map((tick, index) => {
              const leftPercent = (tick / maxImprovement) * 100;

              return (
                <Text
                  key={`${tick}-${index}`}
                  style={[
                    styles.axisLabel,
                    {
                      left: `${leftPercent}%`,
                    },
                  ]}
                >
                  {formatTick(tick)}
                </Text>
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#111827",
    borderRadius: 24,
    paddingTop: 12,
    paddingBottom: 28,
    paddingHorizontal: 24,
    borderWidth: 1,
    borderColor: "#1F2937",
    marginTop: 0,
    marginBottom: 26,
  },
  title: {
    color: "#4C9DFF",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.6,
    marginBottom: 10,
    textTransform: "uppercase",
  },
  graph: {
    width: "100%",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  name: {
    width: NAME_WIDTH,
    color: "#A7ADBC",
    fontSize: 12,
    fontWeight: "600",
  },
  barTrack: {
    flex: 1,
    height: 22,
    justifyContent: "center",
    marginLeft: -BAR_SHIFT_LEFT,
  },
  bar: {
    height: 22,
    borderRadius: 7,
  },
  axisRow: {
    marginLeft: NAME_WIDTH - BAR_SHIFT_LEFT,
    marginTop: 2,
    height: 16,
  },
  axisTrack: {
    flex: 1,
    height: 16,
    position: "relative",
  },
  axisLabel: {
    position: "absolute",
    color: "#4B5563",
    fontSize: 13,
    fontWeight: "600",
    width: 70,
    marginLeft: -35,
    textAlign: "center",
  },
});
