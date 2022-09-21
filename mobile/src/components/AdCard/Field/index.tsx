import React from "react";
import { View, Text, ColorValue } from "react-native";

import { THEME } from "../../../theme";
import { styles } from "./styles";

interface FieldProps {
	label: string;
	value: any;
	colorValue?: ColorValue;
}

export function Field({ colorValue = THEME.COLORS.TEXT, ...props }: FieldProps) {
	return (
		<View style={styles.container}>
			<Text style={styles.label}>{props.label}</Text>
			<Text style={[styles.value, { color: colorValue }]} numberOfLines={1}>{props.value}</Text>
		</View>
	);
}