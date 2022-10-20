import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./header";

function DashLayout() {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}

export default DashLayout;
