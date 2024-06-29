import {
  Text as DefaultText,
  TextProps as DefaultTextProps,
  StyleProp,
  TextStyle,
} from "react-native";
import React from "react";
import { colors } from "../../Theme/colors";
import { typography } from "../../Theme/typography";

/**
 * Customizable Text component for React Native.
 *
 * This component extends the default Text component from React Native and adds additional props for customizing the text style.
 * It includes presets for common text styles, such as headings, subheadings, and form labels, and allows for custom sizes and weights.
 *
 * Props:
 * - text: The text to be displayed.
 * - style: An optional custom style to override the default style.
 * - preset: A predefined text style preset (e.g. "default", "bold", "heading", etc.).
 * - weight: The font weight (e.g. "light", "medium", "bold", etc.).
 * - size: The font size (e.g. "xl", "lg", "md", "sm", "xs", "xxs").
 * - children: The children elements to be displayed.
 *
 * The component uses the `colors` and `typography` objects from the Theme to define the default text color and font family.
 */

type Sizes = keyof typeof sizeStyles;
type Weights = keyof typeof typography.primary;
type Presets = keyof typeof presets;

export interface TextProps extends DefaultTextProps {
  text?: string | number | undefined;
  style?: StyleProp<TextStyle>;
  preset?: Presets;
  weight?: Weights;
  size?: Sizes;
  children?: React.ReactNode;
}

const CustomText = (props: TextProps) => {
  const {
    weight,
    size,
    text,
    children,
    style: $styleOverride,
    ...rest
  } = props;
  const content = text || children;
  const preset: Presets = props.preset ?? "default";
  const styles: StyleProp<TextStyle> = [
    presets[preset],
    weight && fontWeightStyles[weight],
    size && sizeStyles[size],
    $styleOverride,
  ];
  return (
    <DefaultText {...rest} style={[styles]}>
      {content}
    </DefaultText>
  );
};

const sizeStyles = {
  xl: { fontSize: 24, lineHeight: 34, fontWeight: "bold" } satisfies TextStyle,
  lg: { fontSize: 20, lineHeight: 32 } satisfies TextStyle,
  md: { fontSize: 18, lineHeight: 26 } satisfies TextStyle,
  sm: { fontSize: 16, lineHeight: 24 } satisfies TextStyle,
  xs: { fontSize: 14, lineHeight: 21 } satisfies TextStyle,
  xxs: { fontSize: 12, lineHeight: 12 } satisfies TextStyle,
};

const fontWeightStyles = Object.entries(typography.primary).reduce(
  (acc, [weight, fontFamily]) => {
    return { ...acc, [weight]: { fontFamily } };
  },
  {}
) as Record<Weights, TextStyle>;

const baseStyle: StyleProp<TextStyle> = [
  sizeStyles.sm,
  fontWeightStyles.light,
  { color: colors.text },
];

const presets = {
  default: baseStyle,

  bold: [baseStyle, fontWeightStyles.bold] as StyleProp<TextStyle>,

  heading: [
    baseStyle,
    sizeStyles.xl,
    fontWeightStyles.bold,
  ] as StyleProp<TextStyle>,

  subheading: [
    baseStyle,
    sizeStyles.lg,
    fontWeightStyles.medium,
  ] as StyleProp<TextStyle>,

  formLabel: [baseStyle, fontWeightStyles.medium] as StyleProp<TextStyle>,

  light: [
    baseStyle,
    sizeStyles.sm,
    fontWeightStyles.light,
  ] as StyleProp<TextStyle>,

  medium: [baseStyle, sizeStyles.md, fontWeightStyles.medium],

  smallBold: [
    baseStyle,
    sizeStyles.xxs,
    fontWeightStyles.bold,
  ] as StyleProp<TextStyle>,
};

export default CustomText;
