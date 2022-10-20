import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {remark} from "remark";
import html from "remark-html";
import {StaticImageData} from "next/image";

const postsDirectory = path.join(process.cwd(), 'posts//hobbies/');
const projectDirectory = path.join(process.cwd(), 'posts//projects/');
const projectImagesDirectory = path.join(process.cwd(), './public/projects/');
const technologiesImagesDirectory = path.join(process.cwd(), './public/technologies/');

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


export interface PersonnelProject {
    slug: string;
    title: string;
    date: string,
    link: string,
    technologies: string[],
    time: string,
    image: string

    content: string;
}

export function getPersonnelProjectImages(project: PersonnelProject): string[] {
    const fileNames = fs.readdirSync(projectImagesDirectory);
    return fileNames.filter(x => x.startsWith(project.slug));

}

export function getTechnologiesImages(): string[] {
    const fileNames = fs.readdirSync(technologiesImagesDirectory);
    return fileNames;

}

export async function getPersonnelProject(): Promise<PersonnelProject[]> {

    // Get file names under /posts
    const fileNames = fs.readdirSync(projectDirectory);
    const processedContent = await remark()
        .use(html);
    // Sort posts by date
    const hobbies = fileNames.map(async (fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.mdx$/, '');

        // Read markdown file as string
        const fullPath = path.join(projectDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);


        const contentHtml = (await processedContent.process(matterResult.content)).toString();

        return {
            slug: id,
            title: matterResult.data.title,
            date: matterResult.data.date,
            link: matterResult.data.link,
            technologies: matterResult.data.technologies,
            time: matterResult.data.time,
            image: matterResult.data.image,

            content: contentHtml,

        } as PersonnelProject;
    });

    return Promise.all(hobbies)
}
