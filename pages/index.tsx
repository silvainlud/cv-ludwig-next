import type {NextPage} from 'next'
import Base from "../components/base/Base";
import {getHobbies, getPersonnelProject, getTechnologiesImages, Hobby, PersonnelProject} from "../posts";
import SkillList, {Skill} from "../posts/SkillList";
import {AboutMe} from "../components/pages/Index/AboutMe";
import {Hobbies} from "../components/pages/Index/Hobbies";
import {Skills} from "../components/pages/Index/Skills";
import {Curriculum} from "../components/pages/Index/Curriculum";
import {PersonnelProjects} from "../components/pages/Index/PersonnalProjects";
import {ContactMe} from "../components/pages/Index/ContactMe";

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
    )
}

export default Home


