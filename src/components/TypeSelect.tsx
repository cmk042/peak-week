import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";

type SelectItem = {
  id: string;
  label: string;
  icon?: string;
};

type TypeSelectProps = {
  title: string;
  items: SelectItem[];
  selectedId: string;
  onSelect: (id: string) => void;
};

export default function TypeSelect({
  title,
  items,
  selectedId,
  onSelect,
}: TypeSelectProps) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.row}
      >
        {items.map((item) => {
          const isSelected = item.id === selectedId;

          return (
            <Pressable
              key={item.id}
              onPress={() => onSelect(item.id)}
              style={({ pressed }) => [
                styles.option,
                isSelected && styles.selectedOption,
                pressed && styles.pressedOption,
              ]}
            >
              {item.icon && <Text style={styles.icon}>{item.icon}</Text>}

              <Text
                style={[
                  styles.optionText,
                  isSelected && styles.selectedOptionText,
                ]}
              >
                {item.label}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginBottom: 34,
  },
  sectionTitle: {
    color: "#4C9DFF",
    fontSize: 13,
    fontWeight: "900",
    letterSpacing: 1.8,
    marginBottom: 18,
  },
  row: {
    gap: 14,
    paddingRight: 20,
  },
  option: {
    minWidth: 82,
    height: 98,
    borderRadius: 24,
    backgroundColor: "#1A1B2A",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 14,
  },
  selectedOption: {
    backgroundColor: "#3B82F6",
  },
  icon: {
    fontSize: 28,
    marginBottom: 10,
  },
  optionText: {
    color: "#8B92A5",
    fontSize: 14,
    fontWeight: "900",
  },
  selectedOptionText: {
    color: "#FFFFFF",
  },
  pressedOption: {
    transform: [{ scale: 0.96 }],
    opacity: 0.85,
  },
});
