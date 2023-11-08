import { TextProps } from "react-native";

export interface TextLableType extends TextProps {
    textType?: 'hyperlink' | 'error' | 'success';
    children?: string;
}