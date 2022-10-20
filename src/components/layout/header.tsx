import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Groups3Icon from "@mui/icons-material/Groups3";
import IconButton from "@mui/material/IconButton";
import LensBlurIcon from "@mui/icons-material/LensBlur";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import TvIcon from "@mui/icons-material/Tv";

function Header() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar color='primary' position='static'>
				<Toolbar sx={{ justifyContent: "space-between" }}>
					<Box>
						<IconButton size='large'>
							<Link href='/characters'>
								<Groups3Icon fontSize='inherit' sx={{ color: "#000" }} />
							</Link>
						</IconButton>
						<IconButton size='large'>
							<Link href='/locations'>
								<LensBlurIcon fontSize='inherit' sx={{ color: "#000" }} />
							</Link>
						</IconButton>
						<IconButton size='large'>
							<Link href='/episodes'>
								<TvIcon fontSize='inherit' sx={{ color: "#000" }} />
							</Link>
						</IconButton>
					</Box>
					<Link href='/'>
						<Typography variant='h6' color='white'>
							Rick and Morty
						</Typography>
					</Link>
				</Toolbar>
			</AppBar>
		</Box>
	);
}

export default Header;
