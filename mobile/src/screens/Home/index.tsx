import React, { useEffect, useState } from "react";
import { FlatList, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import logoImg from "../../assets/logo-nlw-esports.png";
import { GameCard, GameCardProps } from "../../components/GameCard";
import { Heading } from "../../components/Heading";
import { Background } from "../../components/Background";

import { api } from "../../api/api";
import { styles } from "./styles";

export function Home() {
	const [games, setGames] = useState<GameCardProps[]>([]);
	const navigation = useNavigation();

	useEffect(() => {
		api.get("/games")
			.then((response) => {
				setGames(response.data);
			})
	});

	function handleOpenGame(game: GameCardProps) {
		navigation.navigate("game", {
			...game
		});
	}

	return (
		<Background>
			<SafeAreaView style={styles.container}>
				<Image source={logoImg} style={styles.logo} />

				<Heading title="Encontre seu duo!" subtitle="Selecione o game que deseja jogar..." />

				<FlatList
					data={games}
					keyExtractor={item => item.id}
					renderItem={({ item }) => (
						<GameCard data={item} onPress={() => handleOpenGame(item)} />
					)}
					horizontal
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={styles.contentList}
				/>
			</SafeAreaView>
		</Background>
	)
}