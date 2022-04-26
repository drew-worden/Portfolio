//Import Styles
import styles from "../styles/components/blog.module.css"

//Blog Component
export default function Blog({ blogPosts }) {
	console.log(blogPosts)
	return (
		<div className={styles.blogContainer}>
			{blogPosts.map((post) => (
				<div key={post.title}>
					<span>{post.title}</span>
				</div>
			))}
		</div>
	)
}
