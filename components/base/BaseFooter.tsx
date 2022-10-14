import styles from './BaseFooter.module.scss'
import MediaList from "./Items/MediaList";

const BaseFooter = () => {
    return <footer className={styles.footer}>
        <div className={styles.footer_content}>
            <div className={styles.footer_content__title}>Ludwig SILVAIN</div>
            <div className={styles.footer_content__description}>Développeur Application Web Fullstack</div>
            <MediaList className={styles.footer_content__media}/>

        </div>
        <div className={styles.footer_copyright}>
            Copyright © Ludwig SILVAIN 2022
        </div>
    </footer>
}

export default BaseFooter;
