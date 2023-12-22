import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';

const Main = ({children, router}) => {
	return(
		<main>
			<Head>
                <meta charSet="utf-8"/>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<title>Felipe Farias</title>
			</Head>

			<div>
				{children}
			</div>
		</main>
	);
}

export default Main;
