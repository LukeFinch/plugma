import fs from 'fs';
import path from 'path';
import { redirect } from '@sveltejs/kit';

export async function load() {
	// Define the path to the content folder
	const contentDir = path.join(process.cwd(), 'content/docs');

	const files = fs.readdirSync(contentDir);

	// Filter for Markdown files
	const markdownFiles = files.filter((file) => file.endsWith('.md'));

	// If there are any Markdown files, redirect to the first one
	if (markdownFiles.length > 0) {
		let firstSlug = markdownFiles[0].replace('.md', '');
		firstSlug = firstSlug.replace(/^\d+-/, '');

		redirect(307, `/docs/${firstSlug}`);
	} else {
		// If no Markdown files exist, return a 404 error
		return {
			status: 404,
			error: {
				message: 'No documentation pages available'
			}
		};
	}

	// try {
	// 	// Read all files in the content directory

	// } catch (err) {
	// 	return {
	// 		status: 500,
	// 		error: {
	// 			message: 'Error reading documentation files'
	// 		}
	// 	};
	// }
}
