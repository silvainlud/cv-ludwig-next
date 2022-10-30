import type {NextPage} from 'next'
import Base from "../components/base/Base";
import {AboutMe, ContactMe, Curriculum, Hobbies, PersonnelProjects, Skills} from "../components/pages/IndexPart";
import {getHobbies, getPersonnelProject, getTechnologiesImages, Hobby, PersonnelProject} from "../posts";
import SkillList, {Skill} from "../posts/SkillList";

export async function getStaticProps() {

    const hobbies = await getHobbies()
    const projects = await getPersonnelProject()
    const skills = SkillList

    return {
        props: {
            hobbies,
            projects,
            technologiesImages: getTechnologiesImages(),
            skills
        }
    }
}

interface HomeProps {
    hobbies: Hobby[]
    projects: PersonnelProject[],
    technologiesImages: string[]
    skills: Skill[]
}

const Home: NextPage<HomeProps> = ({hobbies, projects, technologiesImages, skills}) => {

    return (
        <>

            <Base mainTitle={true}>
                <>
                    <AboutMe/>
                    <Hobbies hobbies={hobbies}/>
                    <Skills technologies={technologiesImages} skills={skills}/>
                    <Curriculum/>
                    <PersonnelProjects projects={projects}/>
                    <ContactMe/>
                </>
            </Base>

        </>
    )
}

export default Home


