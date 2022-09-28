import {
	Inter_400Regular,
	Inter_600SemiBold,
	Inter_700Bold,
	Inter_900Black, useFonts
} from '@expo-google-fonts/inter';
import React, { useEffect, useRef } from 'react';
import { StatusBar } from 'react-native';
import { Subscription } from 'expo-modules-core';
import * as Notifications from "expo-notifications";

import { Background } from './src/components/Background';
import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';

import './src/services/notificationConfig';
import { getPushNotificationToken } from './src/services/getPushNotificationToken';

export default function App() {
	let [fontsLoaded] = useFonts({
		Inter_400Regular,
		Inter_600SemiBold,
		Inter_700Bold,
		Inter_900Black
	});

	/** Handle notifications */
	const getNotificationListener = useRef<Subscription>();
	const replyNotificationListener = useRef<Subscription>();

	useEffect(() => {
		getPushNotificationToken();
	}, [])

	useEffect(() => {
		getNotificationListener.current = Notifications.addNotificationReceivedListener(notification => {
			console.log(notification);
		})

		replyNotificationListener.current = Notifications.addNotificationResponseReceivedListener(response => {
			console.log(response);
		})

		return () => {
			getNotificationListener.current && Notifications.removeNotificationSubscription(getNotificationListener.current);
			replyNotificationListener.current && Notifications.removeNotificationSubscription(replyNotificationListener.current);
		}
	}, [])

	return (
		<Background>
			<StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
			{fontsLoaded ? <Routes /> : <Loading />}
		</Background>
	);
}
