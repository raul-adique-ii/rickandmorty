import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

const client = new QueryClient();

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<QueryClientProvider client={client}>
			<BrowserRouter>
				<Routes>
					<Route path='/*' element={<App />} />
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	</React.StrictMode>
);

reportWebVitals();
