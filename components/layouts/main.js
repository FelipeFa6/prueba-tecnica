import Head from 'next/head';

const Main = ({children, router}) => {
	return(
		<main>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<title>Felipe Farias - Homepage</title>
			</Head>

			<div>
				{children}
			</div>
		</main>
	);
}

export default Main;
