import { PressableProps, TextStyle } from "react-native";

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

type colorType = RGB | RGBA | HEX | string;

export interface ButtonPropType extends PressableProps {
    onPress?: () => void;
    text?: string;
    color?: colorType;
    textColor?: colorType;
    rippleColor?: colorType;
    borderRadius?: number;
    textWeight?: TextStyle['fontWeight'];
}