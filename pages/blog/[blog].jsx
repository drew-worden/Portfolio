//Import Packages
import Link from "next/link";

//Import Styles
import styles from "../../styles/pages/blog/blog.module.css";

//Import Utilities
import {
    connectToContentful,
    parseBlogPosts,
    titleCase,
} from "../../utilities/contentful";

//Retrieve Data on Server
export async function getServerSideProps({ query }) {
    //Return to Title to Title Case
    const blogPostTitle = titleCase(query.blog);

    //Get Specific Blog Post from Contentful
    const response = await connectToContentful("blogPost");
    const blogPosts = parseBlogPosts(response);
    let correctBlogPost;
    blogPosts.forEach((post) => {
        if (post.title.toLowerCase() === blogPostTitle.toLowerCase()) {
            correctBlogPost = post;
        }
    });
    return {
        props: {
            blogPost: correctBlogPost,
        },
    };
}

//Dynamic Blog Component
export default function Blog({ blogPost }) {
    return (
        <>
            <header className={styles.header}>
                <Link href="/">
                    <h1 className={styles.title}>Drew P. Worden</h1>
                </Link>
            </header>
            <main className={styles.main}>
                    <span className={styles.postTitle}>{blogPost.title}</span>
                    <span className={styles.date}>{blogPost.date}</span>
                    <p className={styles.body}>{blogPost.body}</p>
            </main>
        </>
    );
}
