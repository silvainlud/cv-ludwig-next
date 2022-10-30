import {PersonnelProject} from "../../../posts";
import styles from "../../../styles/components/index/personnal-projects.module.scss";
import Button from "../../Button";
import React from "react";
import Link from "next/link";
import Image from "next/future/image";

interface PersonnelProjectsProps {
    projects: PersonnelProject[]
}

export const PersonnelProjects = ({projects}: PersonnelProjectsProps) => {

    return <section id="portfolio" className={styles.projects}>
        <h2>Mes réalisations</h2>
        <div className={styles.projects__list}>
            {projects.map((x, index) => <PersonnelProjectCard key={index} project={x}></PersonnelProjectCard>)}
            <div className={styles.projects__list__cardMore}>
                <p>Vous pouvez consulter d’autre de mes projets sur ma page github</p>
                <Button href="https://github.com/silvainlud" className={styles.projects__list__cardMore__btn}>Accéder à
                    mon Github</Button>
            </div>
        </div>
    </section>
}



// CHILD COMPONENT


interface PersonnelProjectCardProps {
    project: PersonnelProject
}

const PersonnelProjectCard = ({project}: PersonnelProjectCardProps) => {
    return <Link href={` / projects /${encodeURIComponent(project.slug)}`}>
        <a className={styles.projects__list__card}>
            <div className={styles.projects__list__card__content}>
                <h3>{project.title}</h3>
                <hr/>
                <p>{project.date}</p>
            </div>
            <Image alt={project.slug} src={require("./../../../public/projects/" + project.image)}></Image>
        </a>
    </Link>
}
