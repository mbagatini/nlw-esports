import axios from "axios";

/**
 * The IP must be of the Windows machine
 * Remember to create a proxy if you are running the backend on WSL
 */
export const api = axios.create({
	baseURL: "http://192.168.1.111:3333"
});