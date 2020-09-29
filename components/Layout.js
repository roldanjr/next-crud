import Head from "next/head";

export function Layout({ children }) {
	return (
		<main className="layout">
			<Head>
				<title>NextJS - Simple CRUD App</title>
			</Head>
			{children}
		</main>
	);
}
