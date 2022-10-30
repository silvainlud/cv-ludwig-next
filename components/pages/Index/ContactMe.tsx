import React, {useState} from "react";
import styles from "../../../styles/components/index/contact-me.module.scss";
import Button from "../../Button";

export const ContactMe = () => {

    const [name, setName] = useState<string>()
    const [mail, setMail] = useState<string>()
    const [message, setMessage] = useState<string>()

    const sendMail = () => {

        let mailA = document.createElement("a");
        mailA.href = "mailto:contact@silvain.eu" +
            "?subject=Mail de contact silvain.eu\n" +
            "&cc=" + name + "<" + mail + ">\n" +
            "&body=" + message;
        mailA.click();
    }

    return <section id="contact-me" className={styles.contactMe}>
        <h2>Me contacter</h2>
        <div className={styles.contactMe__grid}>
            <div>
                <div className={styles.contactMe__card}>
                    <div className={styles.contactMe__card_group}>
                        <label htmlFor="contact_me_name">Nom :</label>
                        <input type="text" id="contact_me_name" value={name} onChange={e => setName(e.target.value)}/>
                    </div>
                    <div className={styles.contactMe__card_group}>
                        <label htmlFor="contact_me_mail">Adresse mail :</label>
                        <input type="text" id="contact_me_mail" value={mail} onChange={e => setMail(e.target.value)}/>
                    </div>
                    <div className={styles.contactMe__card_group}>
                        <label htmlFor="contact_me_message">Message :</label>
                        <textarea id="contact_me_message" value={message} onChange={e => setMessage(e.target.value)}/>
                    </div>
                    <div className={styles.contactMe__card_submit}>
                        <Button onClick={sendMail}>Envoyer</Button>
                    </div>
                </div>
            </div>
            <div>
                <div className={styles.contactMe__title}>
                    Si vous avez des questions/remarques n’hésitez pas !
                </div>
                <p>
                    Si vous avez des questions à me poser (propositions, informations sur les projets que j&apos;ai pu
                    réaliser, ...), vous pouvez me contacter par mail à l&apos;adresse contact@silvain.eu, ou en
                    utilisant le
                    formulaire de contact ci-dessous
                </p>
                <div className={styles.contactMe__informations}>

                    <p><b>Email :</b> contact@silvain.eu</p>

                    <p><b>Linkedin :</b> <a href="https://www.linkedin.com/in/ludwig-silvain/">ludwig-silvain</a></p>
                </div>
            </div>
        </div>
    </section>
}
