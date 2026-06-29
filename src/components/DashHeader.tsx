import { StyleSheet, Text, View, ImageBackground } from "react-native";

export function getDaysLeftColor(daysLeft: number) {
  if (daysLeft <= 5) return "#EF4444";
  if (daysLeft <= 8) return "#F97316";
  if (daysLeft <= 10) return "#FACC15";
  return "#22C55E";
}

type DashHeaderProps = {
  challengeName: string;
  daysLeft: number;
};

export default function DashHeader({
  challengeName,
  daysLeft,
}: DashHeaderProps) {
  const isUrgent = daysLeft <= 3;

  return (
    <View style={styles.header}>
      <View style={styles.left}>
        <Text style={styles.title}>Dashboard</Text>
        <Text style={styles.eyebrow}>{challengeName}</Text>
      </View>

      {isUrgent ? (
        <ImageBackground
          source={require("../../assets/fire2.gif")}
          resizeMode="cover"
          style={styles.card}
          imageStyle={styles.cardImage}
        >
          <View style={styles.darkOverlay}>
            <Text style={styles.urgentCardText}>{daysLeft} days left</Text>
          </View>
        </ImageBackground>
      ) : (
        <View style={styles.card}>
          <Text
            style={[styles.cardText, { color: getDaysLeftColor(daysLeft) }]}
          >
            {daysLeft} days left
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  left: {
    flex: 1,
    paddingRight: 16,
  },
  eyebrow: {
    color: "#4C9DFF",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.6,
    marginBottom: 2,
  },
  title: {
    fontSize: 30,
    fontWeight: "900",
    lineHeight: 32,
    letterSpacing: -1.8,
    maxWidth: 260,
    color: "#FFFFFF",
    shadowColor: "#ffffff",
    shadowOpacity: 0.18,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  card: {
    width: 132,
    height: 48,
    borderRadius: 24,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#10204A",
  },

  cardImage: {
    width: "100%",
    height: "100%",
    borderRadius: 24,
  },

  darkOverlay: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.25)",
  },

  cardText: {
    fontSize: 13,
    fontWeight: "800",
  },

  urgentCardText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "900",
  },
});
