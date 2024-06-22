import {Hobby} from "../../../posts";
import styles from "../../../styles/components/index/hobbies.module.scss";
import Image from "next/image";
import React from "react";


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


// CHILD COMPONENT


interface HobbyCardProps {
    hobby: Hobby
}

const HobbyCard = ({hobby}: HobbyCardProps) => {
    return <div className={styles.hobbies__card}>
        <div className={styles.hobbies__card_head}>
            <h3>{hobby.title}</h3>
            <Image src={require("./../../../public/hobbies/" + hobby.image)} alt={hobby.slug}
                   width={130} height={130}
                   style={{objectFit: "cover", maxHeight: 130, maxWidth: 130}}/>
        </div>
        <div dangerouslySetInnerHTML={{__html: hobby.content}} className={styles.hobbies__card_body}>

        </div>
    </div>
}
