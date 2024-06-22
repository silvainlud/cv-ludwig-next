import styles from './BaseHeader.module.scss'
import Image from "next/image";
import SilvainEuImg from './../../public/silvain-eu.png'
import HeaderAppImg from './../../public/undraw_programming_re_kg9v 1.png'
import Button from "../Button";
import MediaList from "./Items/MediaList";
import React from "react";
import Link from "next/link";

interface BaseHeaderProps {
    mainTitle?: boolean
}

const BaseHeader: React.FC<BaseHeaderProps> = ({mainTitle = false}) => {
    return <header className={styles.header + (mainTitle ? " " + styles.header__index : "")}>
        <div className={styles.headerBar}>
            <Link href={"/"} className={styles.headerBar__title}>
                <Image height={42} className={styles.headerBar__title_img} src={SilvainEuImg}
                       alt="Silvain.eu Logo"></Image>
                <span className={styles.headerBar__title_app}>Ludwig SILVAIN</span>
            </Link>
            <div className={styles.headerBar__separator}></div>
            <nav className={styles.headerBar__nav}>
                <Link href={"/#skills"} className={styles.headerBar__nav__link}>Compétences</Link>
                <Link href={"/#portfolio"} className={styles.headerBar__nav__link}>Portfolio</Link>
                <Link href={"/#curriculum"} className={styles.headerBar__nav__link}>Expériences</Link>
                <Link href={"/#contact-me"} className={styles.headerBar__nav__link}>Contact</Link>
            </nav>
        </div>

        {mainTitle &&
            <div className={styles.headerApp}>
                <Image className={styles.headerApp__img} alt="Personne qui développe" src={HeaderAppImg}></Image>
                <div className={styles.headerApp__content}>
                    <div className={styles.headerApp__content_hello}>Bonjour</div>
                    <div className={styles.headerApp__content_name}>Je suis Ludwig SILVAIN</div>
                    <div className={styles.headerApp__content_description}>Développeur Application Web Fullstack</div>
                    <MediaList/>
                    <div>
                        <Button href="/#about-me">En savoir plus</Button>
                    </div>
                </div>
            </div>
        }

    </header>
}

export default BaseHeader;
