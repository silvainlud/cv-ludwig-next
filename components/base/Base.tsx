import BaseHeader from "./BaseHeader";
import BaseFooter from "./BaseFooter";
import styles from './Base.module.scss'
import React from "react";
import Head from "next/head";

interface BaseProps {
    children?: JSX.Element
    mainTitle?: boolean
}

const Base: React.FC<BaseProps> = ({children, mainTitle = false}) => {
    return <>

        <Head>
            <title>Ludwig SILVAIN</title>
            <meta name="title" content="Ludwig SILVAIN"/>
            <meta name="description" content="Curriculum Vitae de Ludwig SILVAIN (Développeur informatique)"/>
            <link rel="icon" href="/favicon.ico"/>
            <link rel="shortcut icon" type="image/png" href="/favicon.png"/>

            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://silvain.eu/"/>
            <meta property="og:site_name" content="Ludwig SILVAIN"/>
            <meta property="og:title" content="Ludwig SILVAIN"/>
            <meta property="og:description" content="Ludwig SILVAIN (Développeur informatique)"/>
            <meta property="og:image" content="https://silvain.eu/site-screen.png"/>


            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content="https://silvain.eu/"/>
            <meta property="twitter:title" content="Ludwig SILVAIN"/>
            <meta property="twitter:description" content="Ludwig SILVAIN (Développeur informatique)"/>
            <meta property="twitter:image" content="https://silvain.eu/site-screen.png"/>

        </Head>

        <div className={styles.content}>
            <BaseHeader mainTitle={mainTitle}/>
            <main className={styles.main}>{children}</main>
            <BaseFooter/>
        </div>
    </>
}

export default Base
