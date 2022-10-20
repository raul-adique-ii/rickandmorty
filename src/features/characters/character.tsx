import React from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function Character() {
	const { charId } = useParams();

	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				height: "100vh",
			}}>
			<Card>
				<CardMedia component='img' alt={charId} height='440' />
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						Lizard
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						Lizards are a widespread group of squamate reptiles, with over 6,000
						species, ranging across all continents except Antarctica
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
}

export default Character;
