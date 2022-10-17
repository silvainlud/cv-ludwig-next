import ProfilPhoto from './../../public/profil.png'
import CurriculumTreeImage from '../../public/cv-tree_xl.svg'
import CurriculumTreeSmallImage from '../../public/cv-tree_small.svg'
import Image from "next/future/image";
import styles from '../../styles/components/index.module.scss'
import {Hobby} from "../../posts";

export const AboutMe = () => {
    return <section id="about-me" className={styles.aboutMe}>
        <div className={styles.aboutMe__content}>
            <h2>Ludwig SILVAIN</h2>
            <p className={styles.aboutMe__presentation}>
                Après 3 ans d’études en licence Informatique et riche de plus de 2 ans d’une expérience professionelle
                dans le domaine du numérique, je souhaite désormais approfondir ma compréhension en diversifiant mon
                choix d’orientation. Je candidate actuellement pour une formation qui posséde les qualités requises pour
                réaliser mes projets professionnels. Je suis très determiné à accomplir mes objectifs et je vais mettre
                tous les moyens à ma disposition pour y parvenir.
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
