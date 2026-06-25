import { StyleSheet, Text, View, Pressable, Image } from "react-native";

type HeaderProps = {
  challengeName: string;
};

export default function Header({ challengeName }: HeaderProps) {
  return (
    <View style={styles.header}>
      <View style={styles.left}>
        <Text style={styles.eyebrow}>ACTIVE CHALLENGE</Text>
        <Text style={styles.title} numberOfLines={2}>
          {challengeName}
        </Text>
      </View>

      <Pressable style={styles.imageButton}>
        <Image
          source={require("../../assets/peak-week-thinker.png")}
          style={styles.personImage}
        />

        <Image
          source={require("../../assets/bubble.png")}
          style={styles.bubbleImage}
        />

        <View style={styles.notificationDot} />
      </Pressable>
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
    color: "white",
    fontSize: 28,
    fontWeight: "900",
    lineHeight: 32,
    letterSpacing: -1.8,
    maxWidth: 260,
  },
  imageButton: {
    width: 76,
    height: 76,
    borderRadius: 24,
    backgroundColor: "#171A2A",
    alignItems: "center",
    justifyContent: "center",
    overflow: "visible",
    position: "relative",
    borderWidth: 1,
    borderColor: "#242A3D",
  },

  personImage: {
    width: 62,
    height: 62,
    resizeMode: "contain",
  },

  bubbleImage: {
    position: "absolute",
    top: -17,
    right: 14,
    width: 28,
    height: 30,
    resizeMode: "contain",
    overflow: "visible",
  },

  notificationDot: {
    position: "absolute",
    top: -9,
    right: 22,
    width: 11,
    height: 11,
    borderRadius: 999,
    backgroundColor: "#3B82F6",
    borderWidth: 2,
    borderColor: "#171A2A",
  },
});
