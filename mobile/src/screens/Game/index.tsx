import React, { useEffect, useState } from "react";
import { TouchableOpacity, View, Image, FlatList, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";

import logoImg from "../../assets/logo-nlw-esports.png";
import { Background } from "../../components/Background";
import { Heading } from "../../components/Heading";
import { AdCard, AdProps } from "../../components/AdCard";
import { DuoMatch } from "../../components/DuoMatch";

import { api } from "../../api/api";
import { styles } from "./styles";
import { THEME } from "../../theme";

interface RouteParams {
	id: string;
	title: string;
	banner: string;
}

export function Game() {
	const [ads, setAds] = useState<AdProps[]>([]);
	const [discordDuoSelected, setDiscordDuoSelected] = useState("");

	const route = useRoute();
	const game = route.params as RouteParams;

	const navigation = useNavigation();

	useEffect(() => {
		api.get(`/games/${game.id}/ads`)
			.then((response) => {
				setAds(response.data);
			})
	});

	function handleGoBack() {
		navigation.goBack();
	}

	async function getDiscordUser(adsId: string) {
		const response = await api.get<{ discord: string }>(`/ads/${adsId}/discord`);

		setDiscordDuoSelected(response.data.discord);
	}

	return (
		<Background>
			<SafeAreaView style={styles.container}>
				<View style={styles.header}>
					<TouchableOpacity onPress={handleGoBack}>
						<Entypo name="chevron-thin-left" color={THEME.COLORS.CAPTION_300} size={20} />
					</TouchableOpacity>

					<Image source={logoImg} style={styles.logo} />
					<View style={styles.right} />
				</View>

				<Image source={{ uri: game.banner }} resizeMode="cover" style={styles.banner} />

				<Heading title={game.title} subtitle="Comece a jogar agora!" />

				<FlatList
					data={ads}
					horizontal
					style={styles.containerList}
					contentContainerStyle={ads.length == 0 ? styles.emptyListContent : styles.contentList}
					showsHorizontalScrollIndicator={false}
					keyExtractor={item => item.id}
					renderItem={({ item }) => (
						<AdCard key={item.id} {...item} handleOnConnect={() => getDiscordUser(item.id)} />
					)}
					ListEmptyComponent={() => (
						<Text style={styles.emptyList}>Nenhum anúncio foi publicado ainda.</Text>
					)}
				/>

				<DuoMatch
					discord={discordDuoSelected}
					visible={discordDuoSelected.length > 0}
					onClose={() => setDiscordDuoSelected("")}
				/>
			</SafeAreaView>
		</Background>
	)
}