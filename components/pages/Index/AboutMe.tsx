import styles from "../../../styles/components/index/about-me.module.scss";
import Image from "next/image";
import ProfilPhoto from "../../../public/profil.jpg";
import React from "react";

export const AboutMe = () => {
    const calculateAge = () => {
        const birthDate = new Date(2000, 4, 17);
        const difference = Date.now() - birthDate.getTime();
        const ageDate = new Date(difference);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    return <section id="about-me" className={styles.aboutMe}>
        <div className={styles.aboutMe__content}>
            <h2>Ludwig SILVAIN</h2>
            <p className={styles.aboutMe__presentation}>
                Après avoir obtenu une licence et une première année de master et riche de 5 ans d’une expérience
                professionelle dans le domaine du numérique, je souhaite désormais approfondir mes connaissances et
                développer mes acquis. Je suis très déterminé à accomplir mes projets et je vais mettre tous les moyens
                à ma disposition pour y parvenir.
            </p>

            <div className={styles.aboutMe__informations}>
                <p><b>Age :</b> {calculateAge()} ans</p>
                <p><b>Email :</b> contact@silvain.eu</p>
                <p><b>Adresse :</b> Lille , France</p>
                <p><b>Github :</b> <a href="https://github.com/silvainlud">https://github.com/silvainlud</a></p>
            </div>
        </div>
        <Image height={500} src={ProfilPhoto} alt={"Photo de profil"} className={styles.aboutMe__image}/>
    </section>
}
