import SkillItem from "./SkillItem";

const Skills = () => {
    const items = [
        { title: "Angular", icon: "angular.svg" },
        { title: "React.js", icon: "react.svg" },
        { title: "Next.js", icon: "next.svg" },
        { title: "Tailwind", icon: "tailwind.svg" },
        { title: "JavaScript", icon: "javascript.svg" },
        { title: "TypeScript", icon: "typescript.svg" },
        { title: "Node.js", icon: "nodejs.svg" },
        { title: "NestJS", icon: "nestjs.svg" }
    ];

    return (
        <div className="w-full grid grid-cols-2 md:grid-cols-4">
            {items.map((item,index) => (
                <SkillItem key={index} icon={item.icon} title={item.title} />
            ))}
        </div>
    );
}

export default Skills;