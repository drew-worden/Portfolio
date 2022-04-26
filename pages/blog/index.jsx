//Import Packages
import Link from "next/link"

//Import Styles
import styles from "../../styles/pages/blog/index.module.css"

//Import Utilities
import { connectToContentful, parseBlogPosts, dashedCase } from "../../utilities/contentful"

//Retrieve Data on Server
export async function getServerSideProps() {
	//Get Blog Posts from Contentful
	const response = await connectToContentful("blogPost")

	//Parse Blog Posts
	const parsedBlogPosts = parseBlogPosts(response)

	//Pass Blog Posts as Props
	return {
		props: {
			blogPosts: parsedBlogPosts
		}
	}
}

//Blog Page Component
export default function BlogPage({ blogPosts }) {
	return (
		<>
			<header className={styles.header}>
				<Link href="/">
					<h1 className={styles.title}>Drew P. Worden</h1>
				</Link>
			</header>
			<main className={styles.main}>
				{blogPosts.map((post) => (
					<Link href={"/blog/" + dashedCase(post.title)} key={post.title}>
						<div className={styles.postContainer}>
							<span className={styles.type}>Blog Post</span>
							<span className={styles.postTitle}>{post.title}</span>
							{post.body ? (
								<p className={styles.blogPostBody}>
									{post.body.substring(0, 200) + "..."}
								</p>
							) : null}
							{post.image ? (
								<img src={post.image} className={styles.blogImage} />
							) : null}
							{post.date ? <span className={styles.date}>{post.date}</span> : null}
						</div>
					</Link>
				))}
			</main>
		</>
	)
}
