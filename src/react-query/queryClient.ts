import { QueryClient } from "@tanstack/react-query";

export const generateQueryClient = () => {
	return new QueryClient();
};

export const queryClient = generateQueryClient();
