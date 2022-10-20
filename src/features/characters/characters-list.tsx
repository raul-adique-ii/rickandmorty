import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { useGetCharacters } from "./hooks/useCharacters";

function CharactersList() {
	const { characters, isLoading, isError, error, hasNextPage, fetchNextPage } =
		useGetCharacters();
	const navigate = useNavigate();

	if (isLoading) return <Typography>Loading...</Typography>;
	// @ts-ignore
	if (isError) return <Typography>{error.message}</Typography>;
	console.log(characters);
	return (
		<InfiniteScroll
			pageStart={0}
			loadMore={() => fetchNextPage()}
			hasMore={hasNextPage}
			loader={
				<div style={{ background: "red" }} key={0}>
					Loading ...
				</div>
			}>
			<Grid sx={{ pt: 5 }} container justifyContent='center' spacing={3}>
				{characters?.pages?.map((pageData: any) => {
					return pageData?.results?.map((char: any) => {
						return (
							<Grid key={char.id} item>
								<Card
									sx={{ maxWidth: 345, cursor: "pointer" }}
									onClick={() => navigate(`/characters/${char.id}`)}>
									<CardMedia
										component='img'
										height='240'
										image={char.image}
										alt={char.name}
									/>
									<CardContent>
										<Typography
											color='primary'
											gutterBottom
											variant='h5'
											component='div'>
											{char.name}
										</Typography>
										<Typography
											color={
												char.status === "Alive"
													? "success.main"
													: char.status === "Dead"
													? "error"
													: "warning.main"
											}>
											{char.status}
										</Typography>
										<Typography sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
											{char.species}
										</Typography>
										<Typography sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
											{char.gender}
										</Typography>
									</CardContent>
								</Card>
							</Grid>
						);
					});
				})}
			</Grid>
		</InfiniteScroll>
	);
}

export default CharactersList;
