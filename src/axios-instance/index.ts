import axios, { AxiosInstance } from "axios";

const DEFAULT_API_BASE_URL = "https://rickandmortyapi.com/api";

const axiosInstance = axios.create({
	baseURL: process.env.REACT_APP_API_BASE_URL ?? DEFAULT_API_BASE_URL,
});

export function request(): AxiosInstance {
	return axiosInstance;
}
