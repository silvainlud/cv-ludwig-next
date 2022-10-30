import styles from './MediaList.module.scss'
import Image from "next/future/image";
import GithubLogo from "../../../public/media/Octicons-mark-github 1.svg";
import GitlabLogo from "../../../public/media/gitlab-logo-600 1.svg";
import LinkedinLogo from "../../../public/media/LinkedIn_Logo 1.svg";
import {HTMLProps} from "react";

const MediaList = ({...otherProps}: HTMLProps<HTMLDivElement>) => {
    if (otherProps.className != undefined)
        otherProps.className += " " + styles.media;
    return <div className={styles.media} {...otherProps}>
        <a className={styles.media__item} href="https://github.com/silvainlud" target="_blank" rel="noreferrer">
            <Image src={GithubLogo} alt="Github"/>
        </a>
        <a className={styles.media__item} href="https://gitlab.com/silvainlud" target="_blank" rel="noreferrer">
            <Image src={GitlabLogo} alt="Gitlab"/>
        </a>
        <a className={styles.media__item} href="https://www.linkedin.com/in/ludwig-silvain/" target="_blank"
           rel="noreferrer">
            <Image src={LinkedinLogo} alt="Linkedin"/>
        </a>
    </div>
}

export default MediaList;
