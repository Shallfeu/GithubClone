import {classNames} from "@/shared/lib/classNames/classNames.ts";
import cls from './RepositoryCard.module.scss'

interface RepositoryCardProps {
    name: string;
    stars: string;
    link: string;
    lastCommit: string;
    className?: string;
}

const RepositoryCard = (props: RepositoryCardProps) => {
    const {
        name,
        stars,
        link,
        lastCommit,
        className
    } = props;

    return (
        <div className={classNames(cls.Repository, {}, [className])}>
            <h2>{name}</h2>
            <p>{stars}</p>
            <a href={link}>here</a>
            <p>{lastCommit}</p>
        </div>
    )
}
export default RepositoryCard;