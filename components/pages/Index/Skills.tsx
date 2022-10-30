import {Skill, SkillLevel, skillLevelToColor, skillLevelToString} from "../../../posts/SkillList";
import React from "react";
import styles from "../../../styles/components/index/skills.module.scss";
import {ProgressCircleBar} from "../../ProgressCircleBar";
import Image from "next/future/image";


interface SkillProps {
    skills: Skill[]
    technologies: string[],
}


export const Skills: React.FC<SkillProps> = ({technologies, skills}) => {

    return <section id="skills" className={styles.skills}>
        <h2>Mes compétences</h2>
        <div className={styles.skills__list}>
            {skills?.map((x, index) => <SkillItem skill={x} technologies={technologies} key={index}/>)}
        </div>
    </section>
}

// CHILD COMPONENT

interface SkillItemProps {
    skill: Skill
    technologies: string[],

}

const SkillItem: React.FC<SkillItemProps> = ({technologies, skill}) => {


    const getTechnologyImage = (technology: string) => {
        return technologies.find(x => x.replaceAll(/\.[^/.]+$/, "").toLowerCase() == technology.replaceAll(" ", "-").replaceAll(".", '').toLowerCase())
    }


    let progressValue = skill.technologies.reduce((partialSum, a) => partialSum + (a.level ?? 0 as number), 0) * 100 / ((SkillLevel.advance as number) * skill.technologies.filter(x => x.level).length);
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
                        {images &&
                            <Image src={require(`./../../../public/technologies/${images}`)} alt={tech.name} width={30}
                                   height={30}/>}
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


