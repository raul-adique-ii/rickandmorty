import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Welcome() {
	return (
		<Box
			sx={{
				display: "flex",
				height: "100vh",
				justifyContent: "center",
				alignItems: "center",
				overflowY: "hidden",
			}}>
			<Typography color='primary.main' variant='h5'>
				A website using the free Rick and Morty API
			</Typography>
		</Box>
	);
}

export default Welcome;
