import { useInfiniteQuery } from "@tanstack/react-query";

import { request } from "../../../axios-instance";
import { queryKeys } from "../../../react-query/constants";

const getCharacters = async (pageParam: number) => {
	const response = await request().get(`/character/?page=${pageParam}`);
	return response.data;
};

export function useGetCharacters() {
	const {
		data: characters,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
		isError,
		isLoading,
		error,
	} = useInfiniteQuery(
		[queryKeys.characters],
		({ pageParam = 1 }) => getCharacters(pageParam),
		{
			getNextPageParam: (lastPage, allPages) => {
				return lastPage.length ? allPages.length + 1 : undefined;
			},
		}
	);

	return {
		characters,
		isError,
		isLoading,
		error,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
	};
}
