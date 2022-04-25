//Import Packages
import Head from "next/head"

//Import Global Styles
import "../styles/globals.css"

//Root Component
export default function Root({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Drew P. Worden</title>
				<meta
					name="description"
					content="Drew P. Worden | Mathematics Student
					Western Connecticut State University"
				/>
			</Head>
			<Component {...pageProps} />
		</>
	)
}
