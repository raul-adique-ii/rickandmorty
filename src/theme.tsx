import { createTheme } from "@mui/material/styles";
import { forwardRef } from "react";
import { LinkProps } from "@mui/material/Link";
import {
	Link as RouterLink,
	LinkProps as RouterLinkProps,
} from "react-router-dom";

const LinkBehavior = forwardRef<
	HTMLAnchorElement,
	Omit<RouterLinkProps, "to"> & { href: RouterLinkProps["to"] }
>((props, ref) => {
	const { href, ...other } = props;
	// Map href (MUI) -> to (react-router)
	return <RouterLink ref={ref} to={href} {...other} />;
});

export const theme = createTheme({
	palette: {
		primary: {
			main: "#c38d1d",
		},
		success: {
			main: "#388e3c",
		},
		background: {
			default: "#122331",
		},
	},
	components: {
		MuiPaper: {
			styleOverrides: {
				root: {
					background: "rgba(255, 255, 255, 0.1)",
					boxShadow: "20px 20px 50px rgba(0, 0, 0, 0.5)",
					border: "rgba(255, 255, 255, 0.7)",
					backdropFilter: "blur(8px)",
				},
			},
		},
		MuiCard: {
			styleOverrides: {
				root: {
					background: "rgba(255, 255, 255, 0.1)",
					boxShadow: "20px 20px 50px rgba(0, 0, 0, 0.5)",
					border: "rgba(255, 255, 255, 0.7)",
					backdropFilter: "blur(8px)",
				},
			},
		},
		MuiLink: {
			defaultProps: {
				component: LinkBehavior,
			} as LinkProps,
		},
		MuiButtonBase: {
			defaultProps: {
				LinkComponent: LinkBehavior,
			},
		},
	},
});
