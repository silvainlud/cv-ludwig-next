import styles from './BaseHeader.module.scss'
import Image from "next/future/image";
import SilvainEuImg from './../../public/silvain-eu.png'
import HeaderAppImg from './../../public/undraw_programming_re_kg9v 1.png'
import Button from "../Button";
import MediaList from "./Items/MediaList";

const BaseHeader = () => {
    return <header className={styles.header}>
        <div className={styles.headerBar}>
            <div className={styles.headerBar__title}>
                <Image height={42} className={styles.headerBar__title_img} src={SilvainEuImg}
                       alt="Silvain.eu Logo"></Image>
                <span className={styles.headerBar__title_app}>Ludwig SILVAIN</span>
            </div>
            <div className={styles.headerBar__separator}></div>
            <nav className={styles.headerBar__nav}>
                <a className={styles.headerBar__nav__link} href="#">Services</a>
                <a className={styles.headerBar__nav__link} href="#">Compétences</a>
                <a className={styles.headerBar__nav__link} href="#">Portfolio</a>
                <a className={styles.headerBar__nav__link} href="#">Expériences</a>
                <a className={styles.headerBar__nav__link} href="#">Contact</a>
            </nav>
        </div>

        <div className={styles.headerApp}>
            <Image className={styles.headerApp__img} alt="Personne qui développe" src={HeaderAppImg}></Image>
            <div className={styles.headerApp__content}>
                <div className={styles.headerApp__content_hello}>Bonjour</div>
                <div className={styles.headerApp__content_name}>Je suis Ludwig SILVAIN</div>
                <div className={styles.headerApp__content_description}>Développeur Application Web Fullstack</div>
                <MediaList/>
                <div>
                    <Button href="">En savoir plus</Button>
                </div>
            </div>
        </div>

    </header>
}

export default BaseHeader;
