import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps, ImageBackground, ImageSourcePropType } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./styles";
import { THEME } from "../../theme";

export interface GameCardProps {
	id: string;
	title: string;
	banner: string;
	_count: {
		ads: number;
	}
}

interface Props extends TouchableOpacityProps {
	data: GameCardProps
}

export function GameCard({ data, ...rest }: Props) {
	return (
		<TouchableOpacity style={styles.container} {...rest}>
			<ImageBackground source={{ uri: data.banner }} style={styles.cover}>

				<LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
					<Text style={styles.name}>{data.title}</Text>
					<Text style={styles.ads}>{data._count.ads} anúncios</Text>
				</LinearGradient>
			</ImageBackground>
		</TouchableOpacity>
	);
}