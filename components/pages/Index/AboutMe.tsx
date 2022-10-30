import styles from "../../../styles/components/index/about-me.module.scss";
import Image from "next/future/image";
import ProfilPhoto from "../../../public/profil.png";
import React from "react";

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