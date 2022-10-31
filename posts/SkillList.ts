export interface Skill {
    name: string,
    technologies: SkillTechnology[]
}

interface SkillTechnology {
    name: string,
    slug?: string,
    level?: SkillLevel
}

export enum SkillLevel {
    advance = 85,
    medium= 60,
    beginner = 40
}

export function skillLevelToString(level: SkillLevel): string {
    switch (level) {
        case SkillLevel.advance:
            return "Avancé"
        case SkillLevel.medium:
            return "Intermédiaire"
        case SkillLevel.beginner:
            return "Débutant"
    }

    return "???";
}

export function skillLevelToColor(level: SkillLevel): string {
    switch (level) {
        case SkillLevel.advance:
            return "red"
        case SkillLevel.medium:
            return "yellow"
        case SkillLevel.beginner:
            return "blue"
    }

    return "black";
}


export default [
    {
        name: "Développement  Web Backend ", technologies: [
            {name: "PHP", level: SkillLevel.advance},
            {name: "C# Asp .net Core (API)", slug: "c-sharp", level: SkillLevel.beginner},
            {name: "Symfony", level: SkillLevel.advance},
            {name: "Twig", level: SkillLevel.medium},
        ]
    },
    {
        name: "Développement  Web Frontend", technologies: [
            {name: "HTML 5", slug: "HTML", level: SkillLevel.advance},
            {name: "SCSS", level: SkillLevel.advance},
            {name: "CSS", level: SkillLevel.advance},
            {name: "Javascript", level: SkillLevel.medium},
            {name: "NodeJs", level: SkillLevel.medium},
            {name: "React", level: SkillLevel.beginner},
            {name: "VueJs", level: SkillLevel.beginner},
        ]
    },
    {
        name: "Bases de Données", technologies: [
            {name: "SQL", level: SkillLevel.medium},
            {name: "Mysql", level: SkillLevel.medium},
            {name: "MariaDB", level: SkillLevel.medium},
            {name: "Oracle DB", slug: "oracle database", level: SkillLevel.beginner},
            {name: "SQL Server", level: SkillLevel.beginner},
        ]
    },
    {
        name: "Outils informatiques", technologies: [
            {name: "Git", level: SkillLevel.medium},
            {name: "Docker", level: SkillLevel.medium},
            {name: "Suite ELK", slug: "ELK", level: SkillLevel.medium},
            {name: "Ansible", level: SkillLevel.medium},
            {name: "Suite Jetbrains", slug: "jetbrains"},
            {name: "Figma"},
        ]
    },
    {
        name: "Autres Technologies", technologies: [
            {name: "C++", slug: "cpp", level: SkillLevel.beginner},
            {name: "Android", slug: "android", level: SkillLevel.medium},
            {name: "C# WPF", slug: "c sharp", level: SkillLevel.medium},
        ]
    },
] as Skill[]
