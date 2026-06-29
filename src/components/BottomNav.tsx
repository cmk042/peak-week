import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Pressable, StyleSheet, Text, View } from "react-native";

const icons: Record<string, string> = {
  Home: "⌂",
  Stats: "▥",
  Add: "+",
  Profile: "♙",
  Settings: "⚙",
};

export default function BottomNav({ state, navigation }: BottomTabBarProps) {
  return (
    <View style={styles.wrapper}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const isAdd = route.name === "Add";

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <Pressable
            key={route.key}
            onPress={onPress}
            style={[styles.item, isAdd && styles.addButton]}
          >
            <Text
              style={[
                styles.icon,
                isFocused && styles.activeText,
                isAdd && styles.addIcon,
              ]}
            >
              {icons[route.name]}
            </Text>

            {!isAdd && (
              <Text style={[styles.label, isFocused && styles.activeText]}>
                {route.name}
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
    height: 88,
    backgroundColor: "#0B1220",
    borderTopWidth: 1,
    borderTopColor: "#1F2937",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingBottom: 18,
    paddingHorizontal: 8,
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
    marginBottom: 30,
    shadowColor: "#3B82F6",
    shadowOpacity: 0.45,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    alignItems: "center",
    justifyContent: "center",
  },
  addIcon: {
    color: "white",
    fontSize: 38,
    marginBottom: 0,
    fontWeight: "300",
  },
});
