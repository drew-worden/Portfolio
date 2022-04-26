//Import Utilities
import { connectToContentful, parseBlogPosts, titleCase } from "../../utilities/contentful"

//Retrieve Data on Server
export async function getServerSideProps({ query }) {
	//Return to Title to Title Case
	const blogPostTitle = titleCase(query.blog)

	//Get Specific Blog Post from Contentful
	const response = await connectToContentful("blogPost")
	const blogPosts = parseBlogPosts(response)
	let correctBlogPost
	blogPosts.forEach((post) => {
		if (post.title.toLowerCase() === blogPostTitle.toLowerCase()) {
			correctBlogPost = post
		}
	})
	return {
		props: {
			blogPost: correctBlogPost
		}
	}
}

//Dynamic Blog Component
export default function Blog({ blogPost }) {
	return (
		<main>
			<div>
				<span>{blogPost.title}</span>
				<p>{blogPost.body}</p>
				<span>{blogPost.date}</span>
			</div>
		</main>
	)
}
