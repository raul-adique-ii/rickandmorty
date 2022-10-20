import React from "react";

const Characters = React.forwardRef(({ char }: any, ref) => {
	const postBody = (
		<>
			<h2>{char.title}</h2>
			<p>{char.body}</p>
			<p>char ID: {char.id}</p>
		</>
	);

	const content = ref ? (
		// @ts-ignore
		<article ref={ref}>{postBody}</article>
	) : (
		<article>{postBody}</article>
	);

	return content;
});

export default Characters;
