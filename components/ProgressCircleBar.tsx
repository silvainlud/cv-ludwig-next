import styles from './progress-circle-bar.module.scss'
import React from "react";


interface ProgressCircleBarProps {
    color?: string,
    bgColor?: string,
    progress: number
}

export const ProgressCircleBar: React.FC<ProgressCircleBarProps> = ({color, progress, bgColor}) => {

    const rotationFirst = progress <= 50 ? progress * 3.6 : 180;
    const rotationSecond = progress <= 50 ? 180 * 2 : progress * 3.6;

    return <>
        <div className={styles.pieWrapper}>
            <span className={styles.label}>{progress}<span>%</span></span>
            <div className={styles.pie}>
                <div style={{
                    transform: "rotate(" + rotationFirst + "deg)",
                    background: (color ?? undefined)
                }}></div>
                <div style={{
                    transform: "rotate(" + rotationSecond + "deg)",
                    background: progress <= 50 ? (bgColor ?? "white") : (color ?? undefined)
                }}></div>
            </div>
        </div>
    </>

}
