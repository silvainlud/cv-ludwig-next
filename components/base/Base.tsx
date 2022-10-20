import BaseHeader from "./BaseHeader";
import BaseFooter from "./BaseFooter";
import styles from './Base.module.scss'
import React from "react";

interface BaseProps {
    children?: JSX.Element
    mainTitle?: boolean
}

const Base: React.FC<BaseProps> = ({children, mainTitle = false}) => {
    return <div className={styles.content}>
        <BaseHeader mainTitle={mainTitle}/>
        <main className={styles.main}>{children}</main>
        <BaseFooter/>
    </div>
}

export default Base
