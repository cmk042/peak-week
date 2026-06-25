import { Pressable, StyleSheet, Text, View } from "react-native";

type NavItem = {
  label: string;
  icon: string;
  active?: boolean;
};

const navItems: NavItem[] = [
  { label: "Home", icon: "⌂", active: true },
  { label: "Stats", icon: "▥" },
  { label: "Add", icon: "+" },
  { label: "Profile", icon: "♙" },
  { label: "More", icon: "⚙" },
];

export default function BottomNav() {
  return (
    <View style={styles.wrapper}>
      {navItems.map((item) => {
        const isAdd = item.label === "Add";

        return (
          <Pressable
            key={item.label}
            style={[styles.item, isAdd && styles.addButton]}
          >
            <Text
              style={[
                styles.icon,
                item.active && styles.activeText,
                isAdd && styles.addIcon,
              ]}
            >
              {item.icon}
            </Text>

            {!isAdd && (
              <Text style={[styles.label, item.active && styles.activeText]}>
                {item.label}
              </Text>
            )}
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 86,
    backgroundColor: "#0B1220",
    borderTopWidth: 1,
    borderTopColor: "#1F2937",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingBottom: 18,
  },
  item: {
    alignItems: "center",
    justifyContent: "center",
    minWidth: 56,
  },
  icon: {
    color: "#6B7280",
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 4,
  },
  label: {
    color: "#6B7280",
    fontSize: 12,
    fontWeight: "700",
  },
  activeText: {
    color: "#3B82F6",
  },
  addButton: {
    width: 72,
    height: 72,
    borderRadius: 26,
    backgroundColor: "#3B82F6",
    marginBottom: 28,
    shadowColor: "#3B82F6",
    shadowOpacity: 0.45,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
  },
  addIcon: {
    color: "white",
    fontSize: 38,
    marginBottom: 0,
    fontWeight: "300",
  },
});
