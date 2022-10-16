import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {remark} from "remark";
import html from "remark-html";
import {StaticImageData} from "next/image";

const postsDirectory = path.join(process.cwd(), 'posts//hobbies/');

export interface Hobby {
    slug: string;
    title: string;
    content: string;
    image: string;
}

export async function getHobbies(): Promise<Hobby[]> {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const processedContent = await remark()
        .use(html);
    // Sort posts by date
    const hobbies = fileNames.map(async (fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.mdx$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);


        const contentHtml = (await processedContent.process(matterResult.content)).toString();

        return {
            slug: id,
            title: matterResult.data.title,
            content: contentHtml,
            image: matterResult.data.image,

        } as Hobby;
    });

    return Promise.all(hobbies)
}
