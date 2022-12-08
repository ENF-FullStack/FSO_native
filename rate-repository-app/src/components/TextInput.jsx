import { TextInput as NativeTextInput, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  textInput: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 14,
    borderColor: theme.colors.inputBorder,
    backgroundColor: "#ffffff",
  },
  inputError: {
    borderColor: theme.colors.error,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style, styles.textInput, error && styles.inputError];
  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
