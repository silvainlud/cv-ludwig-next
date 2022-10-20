import type {NextPage} from 'next'
import Head from 'next/head'
import Base from "../components/base/Base";
import {AboutMe, ContactMe, Curriculum, Hobbies, PersonnelProjects} from "../components/pages/IndexPart";
import {getHobbies, getPersonnelProject, Hobby, PersonnelProject} from "../posts";

export async function getStaticProps() {

    const hobbies = await getHobbies()
    const projects = await getPersonnelProject()

    console.log(projects)

    return {
        props: {
            hobbies,
            projects
        }
    }
}

interface HomeProps {
    hobbies: Hobby[]
    projects: PersonnelProject[]
}

const Home: NextPage<HomeProps> = ({hobbies, projects}) => {

    return (
        <>

            <Base mainTitle={true}>
                <>
                    <AboutMe/>
                    <Hobbies hobbies={hobbies}/>
                    <Curriculum/>
                    <PersonnelProjects projects={projects}/>
                    <ContactMe/>
                </>
            </Base>

        </>
    )
}

export default Home


