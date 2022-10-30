import ProfilPhoto from './../../public/profil.png'
import CurriculumTreeImage from '../../public/cv-tree_xl.svg'
import CurriculumTreeSmallImage from '../../public/cv-tree_small.svg'
import Image from "next/future/image";
import styles from '../../styles/components/index.module.scss'
import {Hobby, PersonnelProject} from "../../posts";
import Button from "../Button";
import React, {useState} from "react";
import Link from "next/link";
import {Skill, SkillLevel, skillLevelToColor, skillLevelToString} from "../../posts/SkillList";
import {ProgressCircleBar} from "../ProgressCircleBar";

export const AboutMe = () => {
    return <section id="about-me" className={styles.aboutMe}>
        <div className={styles.aboutMe__content}>
            <h2>Ludwig SILVAIN</h2>
            <p className={styles.aboutMe__presentation}>
                Après avoir obtenu une licence et une première année de master et riche de 4 ans d’une expérience
                professionelle dans le domaine du numérique, je souhaite désormais approfondir mes connaissances et
                développer mes acquis. Je candidate donc pour un stage qui me permettrait de réaliser ces objectifs. Je
                suis très déterminé à accomplir mes projets et je vais mettre tous les moyens à ma disposition pour y
                parvenir.
            </p>

            <div className={styles.aboutMe__informations}>
                <p><b>Age :</b> 22 ans</p>
                <p><b>Email :</b> contact@silvain.eu</p>
                <p><b>Adresse :</b> Pas de Calais , France</p>
                <p><b>Github :</b> <a href="https://github.com/silvainlud">https://github.com/silvainlud</a></p>
            </div>
        </div>
        <Image height={500} src={ProfilPhoto} alt={"Photo de profil"} className={styles.aboutMe__image}/>
    </section>
}


interface HobbyProps {
    hobby: Hobby
}

const HobbyCard = ({hobby}: HobbyProps) => {
    return <div className={styles.hobbies__card}>
        <div className={styles.hobbies__card_head}>
            <h3>{hobby.title}</h3>
            <Image src={require("./../../public/hobbies/" + hobby.image)} alt={hobby.slug}
                   width={130} height={130}
                   style={{objectFit: "cover", maxHeight: 130, maxWidth: 130}}/>
        </div>
        <div dangerouslySetInnerHTML={{__html: hobby.content}} className={styles.hobbies__card_body}>

        </div>
    </div>
}
interface SkillItemProps {
    skill: Skill
    technologies: string[],

}

interface SkillProps {
    skills: Skill[]
    technologies: string[],
}

export const SkillItem: React.FC<SkillItemProps> = ({technologies, skill}) => {


    const getTechnologyImage = (technology: string) => {
        return technologies.find(x => x.replaceAll(/\.[^/.]+$/, "").toLowerCase() == technology.replaceAll(" ", "-").replaceAll(".", '').toLowerCase())
    }


    let progressValue = skill.technologies.reduce((partialSum, a) => partialSum + (a.level ?? 0 as number), 0) * 100 / ((SkillLevel.advance as number) * skill.technologies.length);
    progressValue = Math.ceil(progressValue / 10) * 10

    return <div className={styles.skills__item}>
        <div>
            <ProgressCircleBar progress={progressValue}></ProgressCircleBar>
        </div>
        <div className={styles.skills__item__content}>
            <h3>{skill.name}</h3>
            <div className={styles.skills__technology_list}>
                {skill.technologies.map((tech, index) => {

                    const images = getTechnologyImage(tech.slug ?? tech.name);

                    return <div key={index}
                                className={styles.skills__technology_item}>
                        {images && <Image src={require(`./../../public/technologies/${images}`)} alt={tech.name} width={30} height={30}/>}
                        <span>{tech.name}</span>
                        {tech.level && <>
                            <span>-</span>
                            <span
                                className={styles.skills__technology_level + " " + styles["skills__technology_level_" + skillLevelToColor(tech.level)]}>{skillLevelToString(tech.level)}</span>
                        </>}
                    </div>
                })}
            </div>
        </div>
    </div>
}

export const Skills: React.FC<SkillProps> = ({technologies, skills}) => {

    return <section id="skills" className={styles.skills}>
        <h2>Mes compétences</h2>
        <div className={styles.skills__list}>
            {skills?.map((x, index) => <SkillItem skill={x} technologies={technologies} key={index}/>)}
        </div>
    </section>
}

interface HobbiesProps {
    hobbies: Hobby[]
}

export const Hobbies = ({hobbies}: HobbiesProps) => {

    const hobbyJsx = hobbies.map((x, index) => <HobbyCard key={index} hobby={x}/>);

    return <section id="hobbies" className={styles.hobbies}>
        <h2>Mes passions</h2>
        <div className={styles.hobbies__list}>
            <div>
                {hobbyJsx.filter((x, index) => index % 2 == 0)}

            </div>
            <div>
                {hobbyJsx.filter((x, index) => index % 2 != 0)}
            </div>

        </div>
    </section>
}


export const Curriculum = () => {

    return <section id="curriculum" className={styles.curriculum}>
        <h2>Mon parcours</h2>
        <div className={styles.curriculum__path}>
            <Image alt={"Curriculum"} src={CurriculumTreeImage}
                   className={styles.curriculum__path__image + " " + styles.curriculum__path__image__xl}></Image>
            <Image alt={"Curriculum"} src={CurriculumTreeSmallImage}
                   className={styles.curriculum__path__image + " " + styles.curriculum__path__image__small}></Image>
        </div>
    </section>
}

export const ContactMe = () => {

    const [name, setName] = useState<string>()
    const [mail, setMail] = useState<string>()
    const [message, setMessage] = useState<string>()

    const sendMail = () => {

        let mailA = document.createElement("a");
        mailA.href = "mailto:contact@silvain.eu" +
            "?subject=Mail de contact silvain.eu\n" +
            "&cc=" + name + "<" + mail + ">\n" +
            "&body=" + message;
        mailA.click();
    }

    return <section id="contact-me" className={styles.contactMe}>
        <h2>Me contacter</h2>
        <div className={styles.contactMe__grid}>
            <div>
                <div className={styles.contactMe__card}>
                    <div className={styles.contactMe__card_group}>
                        <label htmlFor="contact_me_name">Nom :</label>
                        <input type="text" id="contact_me_name" value={name} onChange={e => setName(e.target.value)}/>
                    </div>
                    <div className={styles.contactMe__card_group}>
                        <label htmlFor="contact_me_mail">Adresse mail :</label>
                        <input type="text" id="contact_me_mail" value={mail} onChange={e => setMail(e.target.value)}/>
                    </div>
                    <div className={styles.contactMe__card_group}>
                        <label htmlFor="contact_me_message">Message :</label>
                        <textarea id="contact_me_message" value={message} onChange={e => setMessage(e.target.value)}/>
                    </div>
                    <div className={styles.contactMe__card_submit}>
                        <Button onClick={sendMail}>Envoyer</Button>
                    </div>
                </div>
            </div>
            <div>
                <div className={styles.contactMe__title}>
                    Si vous avez des questions/remarques n’hésitez pas !
                </div>
                <p>
                    Si vous avez des questions à me poser (propositions, informations sur les projets que j&apos;ai pu
                    réaliser, ...), vous pouvez me contacter par mail à l&apos;adresse contact@silvain.eu, ou en
                    utilisant le
                    formulaire de contact ci-dessous
                </p>
                <div className={styles.contactMe__informations}>

                    <p><b>Email :</b> contact@silvain.eu</p>

                    <p><b>Linkedin :</b> <a href="https://www.linkedin.com/in/ludwig-silvain/">ludwig-silvain</a></p>
                </div>
            </div>
        </div>
    </section>
}

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
            <Image alt={project.slug} src={require("./../../public/projects/" + project.image)}></Image>
        </a>
    </Link>
}

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
