import Layout from '../components/layouts/main';

const Website = ({ Component, pageProps, router }) => {
	
	return (
		<div>
			<Layout router={router} >
				<Component {...pageProps} key={router.route}/>
			</Layout>
		</div>
	);
}

export default Website;
