import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { GameController } from "phosphor-react-native";

import { Field } from "./Field";
import { THEME } from "../../theme";
import { styles } from "./styles";

export interface AdProps {
	id: string;
	name: string;
	weekDays: any,
	yearsPlaying: number;
	hourStart: string;
	hourEnd: string;
	useVoiceChannel: boolean;
	handleOnConnect: () => void;
}

export function AdCard({ handleOnConnect, ...props }: AdProps) {
	const dias = Object.keys(props.weekDays).length;
	const disponibilidade = `${dias} ${dias == 1 ? 'dia' : 'dias'} \u2022 ${props.hourStart} - ${props.hourEnd}`;

	return (
		<View style={styles.container}>
			<Field label="Nome" value={props.name} />
			<Field label="Tempo de jogo" value={props.yearsPlaying} />
			<Field label="Disponibilidade" value={disponibilidade} />
			<Field label="Chamada de áudio?"
				value={props.useVoiceChannel ? "Sim" : "Não"}
				colorValue={props.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
			/>

			<TouchableOpacity style={styles.button} onPress={handleOnConnect}>
				<GameController size={20} color={THEME.COLORS.TEXT} />
				<Text style={styles.buttonTitle}>Conectar</Text>
			</TouchableOpacity>
		</View >
	);
}