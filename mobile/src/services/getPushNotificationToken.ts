import * as Notifications from "expo-notifications";

/**
 * Verify if user approved notification push
 * Request notification push if not granted
 * 
 * @return Push token
 */
export async function getPushNotificationToken() {
	const { granted } = await Notifications.getPermissionsAsync();

	if (!granted) {
		await Notifications.requestPermissionsAsync();
	}

	const pushToken = await Notifications.getExpoPushTokenAsync();

	return pushToken.data;
}