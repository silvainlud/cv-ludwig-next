import {NextPage} from "next";
import Base from "../../components/base/Base";
import {getPersonnelProject, getPersonnelProjectImages, getTechnologiesImages, PersonnelProject} from "../../posts";
import Image from "next/image";

import styles from './../../styles/components/project.module.scss'
import Link from "next/link";

export async function getStaticPaths() {
    const projects: PersonnelProject[] = await getPersonnelProject()
    const paths = projects.map(x => x.slug).map(x => {
        return {params: {slug: x}}
    })
    return {
        paths: paths,
        fallback: false, // can also be true or 'blocking'
    }
}

interface PostStaticProps {
    params: PostStaticParamProps;
}

interface PostStaticParamProps {
    slug: string;
}

interface PostProps {
    project: PersonnelProject;
    images: string[]
    technologiesImages: string[]
}

export async function getStaticProps({params}: PostStaticProps) {
    const projects: PersonnelProject[] = await getPersonnelProject()
    const project = projects.find(x => x.slug == params.slug)
    const images = project === undefined ? [] : getPersonnelProjectImages(project);

    return {
        props: {
            project: project,
            images: images,
            technologiesImages: getTechnologiesImages()
        } as PostProps,
    };
}

const Post: NextPage<PostProps> = ({project, images, technologiesImages}) => {

    const getTechnologyImage = (technology: string) => {
        return technologiesImages.find(x => x.toLowerCase().split(".")[0] == technology.replaceAll(" ", "-").replaceAll(".", "").toLowerCase())
    }

    return <Base>
        <div className={styles.projectArticle}>
            <div className={styles.projectArticle__content}>
                <h1>{project.title}</h1>

                <Image alt={project.slug} src={require("./../../public/projects/" + project.image)}
                       className={styles.art_miniature}/>

                <div dangerouslySetInnerHTML={{__html: project.content}}></div>

                <div className={styles.projectArticle__gallery}>
                    {images.map((x, index) =>
                        <Link key={index} href={x} className={styles.projectArticle__gallery__item} target="_blank">
                            <Image src={require("./../../public/projects/" + x)} alt={x}/>
                        </Link>
                    )}
                </div>
            </div>

            <div className={styles.projectArticle__informations}>

                <div className={styles.projectArticle__informations__item}>
                    <h2>Informations</h2>


                    <div>
                        <h4>Date de mise en production</h4>
                        <p>{project.date}</p>
                    </div>
                    <div>
                        <h4>Temps</h4>
                        <p>{project.time}</p>
                    </div>

                    <div>
                        <h4>Lien</h4>
                        <p><a href={project.link} rel="noreferrer" target="_blank">{project.link}</a></p>
                    </div>


                </div>
                <div>

                    <h3>Technologies Utilisées</h3>
                    <ul>
                        {project.technologies.map((x, index) => {

                            const img = getTechnologyImage(x)
                            console.log(img)
                            return <li key={index}>
                                {img && <Image src={require("./../../public/technologies/" + img)} alt={x}
                                               width={24} height={24}/>}
                                <span>{x}</span>
                            </li>
                        })}
                    </ul>

                </div>
            </div>
        </div>
    </Base>


}

export default Post;
