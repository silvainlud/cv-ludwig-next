import type {NextPage} from 'next'
import Base from "../components/base/Base";
import {AboutMe, ContactMe, Curriculum, Hobbies, PersonnelProjects, Skills} from "../components/pages/IndexPart";
import {getHobbies, getPersonnelProject, getTechnologiesImages, Hobby, PersonnelProject} from "../posts";

export async function getStaticProps() {

    const hobbies = await getHobbies()
    const projects = await getPersonnelProject()

    return {
        props: {
            hobbies,
            projects,
            technologiesImages: getTechnologiesImages()
        }
    }
}

interface HomeProps {
    hobbies: Hobby[]
    projects: PersonnelProject[],
    technologiesImages: string[]
}

const Home: NextPage<HomeProps> = ({hobbies, projects, technologiesImages}) => {

    return (
        <>

            <Base mainTitle={true}>
                <>
                    <AboutMe/>
                    <Hobbies hobbies={hobbies}/>
                    <Skills technologies={technologiesImages}/>
                    <Curriculum/>
                    <PersonnelProjects projects={projects}/>
                    <ContactMe/>
                </>
            </Base>

        </>
    )
}

export default Home


