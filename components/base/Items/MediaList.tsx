import styles from './MediaList.module.scss'
import Image from "next/future/image";
import TwitterLogo from "../../../public/media/Logo black 1.svg";
import GithubLogo from "../../../public/media/Octicons-mark-github 1.svg";
import GitlabLogo from "../../../public/media/gitlab-logo-600 1.svg";
import LinkedinLogo from "../../../public/media/LinkedIn_Logo 1.svg";
import {HTMLProps} from "react";

const MediaList = ({...otherProps}: HTMLProps<HTMLDivElement>) => {
    if (otherProps.className != undefined)
        otherProps.className += " " + styles.media;
    return <div className={styles.media} {...otherProps}>
        <a className={styles.media__item} href="">
            <Image src={TwitterLogo} alt="Twitter"/>
        </a>
        <a className={styles.media__item} href="">
            <Image src={GithubLogo} alt="Github"/>
        </a>
        <a className={styles.media__item} href="">
            <Image src={GitlabLogo} alt="Gitlab"/>
        </a>
        <a className={styles.media__item} href="">
            <Image src={LinkedinLogo} alt="Linkedin"/>
        </a>
    </div>
}

export default MediaList;
