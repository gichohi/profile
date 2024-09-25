interface Props {
    icon: string;
    title: string;
}

const SkillItem: React.FC<Props> = ({icon,title}) => {
    return(
        <div className="flex flex-col items-center justify-between p-4 m-4">
            <img src={icon} width="60" height="60"/>
            <p className="mt-2">{title}</p>
        </div>
    );
}

export default SkillItem; 