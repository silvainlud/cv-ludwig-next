import {useRouter} from "next/router";
import {NextPage} from "next";
import Head from "next/head";
import Base from "../../components/base/Base";
import {getPersonnelProject, getPersonnelProjectImages, PersonnelProject} from "../../posts";
import {getLocFor} from "@typescript-eslint/typescript-estree/dist/node-utils";
import Image from "next/future/image";

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
}

export async function getStaticProps({params}: PostStaticProps) {
    const projects: PersonnelProject[] = await getPersonnelProject()
    const project = projects.find(x => x.slug == params.slug)
    const images = project === undefined ? [] : getPersonnelProjectImages(project);

    return {
        props: {
            project: project,
            images: images,
        } as PostProps,
    };
}

const Post: NextPage<PostProps> = ({project, images}) => {

    return <>
        <Head>
            <title>Create Next App</title>
        </Head>

        <Base>
            <>
                <div className={styles.projectArticle}>
                    <div className={styles.projectArticle__content}>
                        <h1>{project.title}</h1>

                        <Image alt={project.slug} src={require("./../../public/projects/" + project.image)}
                               className={styles.art_miniature}/>

                        <div dangerouslySetInnerHTML={{__html: project.content}}></div>

                        <div className={styles.projectArticle__gallery}>
                            {images.map((x, index) =>
                                <Link key={index}  href={x}>
                                    <a className={styles.projectArticle__gallery__item} target="_blank">
                                        <Image src={require("./../../public/projects/" + x)} alt={x}/>
                                    </a>
                                </Link>
                            )}
                        </div>
                    </div>

                    <div>
                        <div className="art_info">

                            <div className="art_info-data">
                                <h2>Informations</h2>
                                <div className="art-info-table">


                                    <div className="art-info-table_icon">
                                        <i className="fas fa-calendar-alt"></i>
                                    </div>
                                    <div>
                                        <h4>Date de mise en production</h4>
                                        <p>{project.date}</p>
                                    </div>

                                    <div className="art-info-table_icon">
                                        <i className="fas fa-clock"></i>
                                    </div>
                                    <div>
                                        <h4>Temps</h4>
                                        <p>{project.time}</p>
                                    </div>


                                    <div className="art-info-table_icon">
                                        <i className="fas fa-link"></i>
                                    </div>
                                    <div>
                                        <h4>Lien</h4>
                                        <p><a href={project.link}>{project.link}</a></p>
                                    </div>


                                </div>
                            </div>
                            <div className="art_info-tech">

                                <h3>Technologies Utilisées</h3>


                            </div>
                        </div>
                    </div>
                </div>
            </>
        </Base>

    </>
}

export default Post;
