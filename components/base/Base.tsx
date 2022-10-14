import BaseHeader from "./BaseHeader";
import BaseFooter from "./BaseFooter";
import styles from './Base.module.scss'

interface BaseProps {
    children?: JSX.Element
}

const Base = ({children}: BaseProps) => {
    return <div className={styles.content}>
        <BaseHeader/>
        <main className={styles.main}>{children}</main>
        <BaseFooter/>
    </div>
}

export default Base
