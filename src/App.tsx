import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import DashLayout from "./components/layout/dash-layout";

import Character from "./features/characters/character";
import CharactersList from "./features/characters/characters-list";
import EpisodesList from "./features/episodes/episodes-list";
import LocationsList from "./features/locations/locations-list";
import Welcome from "./components/layout/welcome";
import { theme } from "./theme";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Routes>
				<Route path='/' element={<DashLayout />}>
					<Route index element={<Welcome />} />
					<Route path='characters' element={<CharactersList />} />
					<Route path='characters/:charId' element={<Character />} />
					<Route path='locations' element={<LocationsList />} />
					<Route path='episodes' element={<EpisodesList />} />
				</Route>
			</Routes>
		</ThemeProvider>
	);
}

export default App;
