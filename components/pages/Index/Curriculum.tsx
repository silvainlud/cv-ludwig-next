import styles from "../../../styles/components/index/curriculum.module.scss";
import Image from "next/future/image";
import CurriculumTreeImage from "../../../public/cv-tree_xl.svg";
import CurriculumTreeSmallImage from "../../../public/cv-tree_small.svg";
import React from "react";

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
