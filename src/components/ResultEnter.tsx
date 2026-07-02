import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";

type ResultEnterProps = {
  value: string;
  onChangeValue: (value: string) => void;
  unit: string;
  helperText: string;
};

export default function ResultEnter({
  value,
  onChangeValue,
  unit,
  helperText,
}: ResultEnterProps) {
  return (
    <View>
      <Text style={styles.sectionTitle}>YOUR RESULT</Text>

      <View style={styles.resultBox}>
        <TextInput
          value={value}
          onChangeText={onChangeValue}
          keyboardType="decimal-pad"
          placeholder="0"
          placeholderTextColor="#4B5563"
          style={styles.resultInput}
          textAlign="right"
        />
      </View>

      <View style={styles.helperBox}>
        <Text style={styles.helperText}>{helperText}</Text>
      </View>

      <Pressable style={styles.saveButton}>
        <Text style={styles.saveText}>Save Result</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    color: "#4C9DFF",
    fontSize: 13,
    fontWeight: "900",
    letterSpacing: 1.8,
    marginBottom: 18,
  },
  resultBox: {
    height: 188,
    borderRadius: 24,
    backgroundColor: "#111827",
    borderWidth: 1,
    borderColor: "#2563EB",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingHorizontal: 34,
    marginBottom: 24,
  },
  resultInput: {
    color: "#8B92A5",
    fontSize: 72,
    fontWeight: "900",
    letterSpacing: -3,
    width: "100%",
  },
  helperBox: {
    minHeight: 74,
    borderRadius: 24,
    backgroundColor: "#0B3B1E",
    justifyContent: "center",
    paddingHorizontal: 20,
    marginBottom: 36,
  },
  helperText: {
    color: "#86EFAC",
    fontSize: 16,
    fontWeight: "800",
    lineHeight: 22,
  },
  saveButton: {
    height: 84,
    borderRadius: 24,
    backgroundColor: "#3B82F6",
    alignItems: "center",
    justifyContent: "center",
  },
  saveText: {
    color: "#FFFFFF",
    fontSize: 23,
    fontWeight: "900",
  },
});
