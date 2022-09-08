//Import Packages
import Image from "next/image"
import Link from "next/link"

//Import Styles
import styles from "../styles/pages/index.module.css"

//Import Images
import profile from "../assets/images/profile.png"

//Import Utilities
import { connectToContentful, parseBlogPosts, dashedCase } from "../utilities/contentful"

//Retrieve Data on Server
export async function getServerSideProps() {
	//Get Blog Posts from Contentful
	const response = await connectToContentful("blogPost")

	//Parse Blog Posts
	const parsedBlogPosts = parseBlogPosts(response).splice(0, 3)

	//Pass Blog Posts as Props
	return {
		props: {
			blogPosts: parsedBlogPosts
		}
	}
}

//Index Page Component
export default function IndexPage({ blogPosts }) {
	return (
		<main className={styles.main}>
			<section className={styles.leftSection}>
				<h1 className={styles.title}>Drew P. Worden</h1>
				<p className={styles.position}>
					Data Scientist
					<br />
					IBM
				</p>
				<p className={styles.desc}>
					Just a guy with an obsessive passion for abstract mathematics, technology, and
					the fields where they intersect. I often find myself with too much to learn and
					not enough time to learn it. Everything from data science, artificial
					intelligence, machine learning, and web development to philosophy, psychology,
					and number theory run laps around my brain.
				</p>
				<div className={styles.listContainer}>
					<a href="#blog-section">
						<h2 className={styles.listItem}>01 | Blog</h2>
					</a>
					<a href="#about-section">
						<h2 className={styles.listItem}>02 | About</h2>
					</a>
					<h2 className={styles.listItem}>03 | Projects</h2>
					<h2 className={styles.listItem}>04 | Resume</h2>
				</div>
				<div className={styles.socialContainer}>
					<Image className={styles.profilePicture} src={profile} width={35} height={35} />
					<a
						className={styles.socialTitle}
						href="https://www.linkedin.com/in/drewpworden/"
						target="_blank">
						<span>LinkedIn</span>
					</a>
					<a
						className={styles.socialTitle}
						href="https://github.com/drewpworden"
						target="_blank">
						<span>Github</span>
					</a>
				</div>
			</section>
			<section className={styles.rightSection}>
				<section className={styles.subsection} id="blog-section">
					{blogPosts.map((post) => (
						<Link href={"/blog/" + dashedCase(post.title)} key={post.title}>
							<div className={styles.blogPostContainer}>
								<span className={styles.type}>Blog Post</span>
								<span className={styles.blogPostTitle}>{post.title}</span>
								{post.body ? (
									<p className={styles.blogPostBody}>
										{post.body.substring(0, 200) + "..."}
									</p>
								) : null}
								{post.image ? (
									<img src={post.image} className={styles.blogImage} />
								) : null}
								{post.date ? (
									<span className={styles.date}>{post.date}</span>
								) : null}
							</div>
						</Link>
					))}
					<Link href="/blog">
						<span className={styles.link}>View All Posts</span>
					</Link>
				</section>
				<section className={styles.aboutSubsection} id="about-section">
					<div className={styles.questionAnswerContainer}>
						<div className={styles.questionContainer}>
							<span className={styles.type}>Question</span>
							<p className={styles.question}>What is your name?</p>
						</div>
						<div className={styles.answerContainer}>
							<span className={styles.type}>Answer</span>
							<p className={styles.question}>
								My full name is Drew P. Worden. Message me to find out what the "P"
								stands for.
							</p>
						</div>
					</div>
					<div className={styles.questionAnswerContainer}>
						<div className={styles.questionContainer}>
							<span className={styles.type}>Question</span>
							<p className={styles.question}>How old are you?</p>
						</div>
						<div className={styles.answerContainer}>
							<span className={styles.type}>Answer</span>
							<p className={styles.question}>
								I am currently 22 years old, although if you ask those who know me
								well, they will say I am at least 50.
							</p>
						</div>
					</div>
					<div className={styles.questionAnswerContainer}>
						<div className={styles.questionContainer}>
							<span className={styles.type}>Question</span>
							<p className={styles.question}>Where do you live?</p>
						</div>
						<div className={styles.answerContainer}>
							<span className={styles.type}>Answer</span>
							<p className={styles.question}>
								I currently reside in Manhattan, New York.
							</p>
						</div>
					</div>
					<div className={styles.questionAnswerContainer}>
						<div className={styles.questionContainer}>
							<span className={styles.type}>Question</span>
							<p className={styles.question}>How can I contact you?</p>
						</div>
						<div className={styles.answerContainer}>
							<span className={styles.type}>Answer</span>
							<p className={styles.question}>
								The best way to get hold of me is by email at
								drew.p.worden@gmail.com. You can also connect with me on LinkedIn.
							</p>
						</div>
					</div>
					<div className={styles.questionAnswerContainer}>
						<div className={styles.questionContainer}>
							<span className={styles.type}>Question</span>
							<p className={styles.question}>What is your education?</p>
						</div>
						<div className={styles.answerContainer}>
							<span className={styles.type}>Answer</span>
							<p className={styles.question}>
								I currently hold a B.A. in Mathematics from Western Connecticut
								State University and am starting a M.A. in Artificial Intelligence at Johns Hopkins University soon.
							</p>
						</div>
					</div>
					<div className={styles.questionAnswerContainer}>
						<div className={styles.questionContainer}>
							<span className={styles.type}>Question</span>
							<p className={styles.question}>What are your academic interests?</p>
						</div>
						<div className={styles.answerContainer}>
							<span className={styles.type}>Answer</span>
							<p className={styles.question}>
								My mathematical research interests are in number theory and
								cryptography.
							</p>
						</div>
					</div>
					<div className={styles.questionAnswerContainer}>
						<div className={styles.questionContainer}>
							<span className={styles.type}>Question</span>
							<p className={styles.question}>What are your career interests?</p>
						</div>
						<div className={styles.answerContainer}>
							<span className={styles.type}>Answer</span>
							<p className={styles.question}>
								I am currently looking to expand into the field of data science and machine
								learning, preferably with a strong application of applied
								mathematics.
							</p>
						</div>
					</div>
					<div className={styles.questionAnswerContainer}>
						<div className={styles.questionContainer}>
							<span className={styles.type}>Question</span>
							<p className={styles.question}>What are your recreational interests?</p>
						</div>
						<div className={styles.answerContainer}>
							<span className={styles.type}>Answer</span>
							<p className={styles.question}>
								Since my other interests keep me at a desk most of the time, I like
								to get outside. Hiking, swimming, going to the gym, pretty much
								anything to get the blood pumping. Good films and music also hold a special place in my heart.
							</p>
						</div>
					</div>
					<div className={styles.questionAnswerContainer}>
						<div className={styles.questionContainer}>
							<span className={styles.type}>Question</span>
							<p className={styles.question}>Favorite book, movie, and song?</p>
						</div>
						<div className={styles.answerContainer}>
							<span className={styles.type}>Answer</span>
							<p className={styles.question}>
								Everything is subject to change but my current favorite book is
								Fahrenheit 451 by Ray Bradbury, favorite movie is Interstellar by
								Christopher Nolan, and favorite song is Cat's in the Cradle by Harry
								Chapin.
							</p>
						</div>
					</div>
					<div className={styles.questionAnswerContainer}>
						<div className={styles.questionContainer}>
							<span className={styles.type}>Question</span>
							<p className={styles.question}>
								Where do you see yourself in 10 years?
							</p>
						</div>
						<div className={styles.answerContainer}>
							<span className={styles.type}>Answer</span>
							<p className={styles.question}>
								A hard question to answer at such a tumultuous time in my life. It
								may sound cliche but all I can say is that I want to be using my
								talents, combined with my hard work, to help push humanity forward
								technologically and mathematically.
							</p>
						</div>
					</div>
					<div className={styles.questionAnswerContainer}>
						<div className={styles.questionContainer}>
							<span className={styles.type}>Question</span>
							<p className={styles.question}>What is your greatest strength?</p>
						</div>
						<div className={styles.answerContainer}>
							<span className={styles.type}>Answer</span>
							<p className={styles.question}>
								I would say my greatest stength is my natural ability to learn
								easily and, as a result, be extremely adaptable.
							</p>
						</div>
					</div>
					<div className={styles.questionAnswerContainer}>
						<div className={styles.questionContainer}>
							<span className={styles.type}>Question</span>
							<p className={styles.question}>What is your greatest weakness?</p>
						</div>
						<div className={styles.answerContainer}>
							<span className={styles.type}>Answer</span>
							<p className={styles.question}>
								My greatest weakness is the constant pull of distraction. There are
								so many things I want to do and learn that sometimes it is so
								overwhelmeing that it has the opposite affect and nothing gets done.
							</p>
						</div>
					</div>
				</section>
			</section>
		</main>
	)
}
