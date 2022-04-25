//Import Packages
import { createClient } from "contentful"

//Connect To Contentful Function
async function connectToContentful(content, limit) {
	const client = createClient({
		space: process.env.SPACE,
		accessToken: process.env.ACCESS_TOKEN
	})

	//Get Type of Content
	const response = await client.getEntries({
		content_type: content,
		limit: limit
	})

	//Return Content
	return response
}

//Parse Blog Posts Function
function parseBlogPosts(response) {
	//Created Empty Parsed List
	let parsedList = []

	//Parse Each Item
	response.items.forEach((item) => {
		//Process Images & Videos
		if (item.fields.image) {
			item.fields.image = item.fields.image.fields.file.url
		} else if (item.fields.video) {
			item.fields.video = item.fields.video.fields.file.url
		}
		//Append Item to Parsed List
		parsedList.push(item.fields)
	})
	return parsedList
}

//Export Functions
export { connectToContentful, parseBlogPosts }
