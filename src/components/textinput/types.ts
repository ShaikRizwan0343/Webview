import { StyleProp, TextInputProps, TextStyle, ViewStyle } from "react-native";

export interface TextFieldPropType extends TextInputProps {
    textInputViewStyle?: StyleProp<ViewStyle>;
    textLabelStyles?: StyleProp<TextStyle>;
    textLabel?: string;
}