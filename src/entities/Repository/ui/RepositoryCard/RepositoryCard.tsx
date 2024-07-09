import {classNames} from "@/shared/lib/classNames/classNames.ts";
import cls from './RepositoryCard.module.scss'
import {Link} from "react-router-dom";
import {RoutePath} from "@/shared/config/routeConfig/routeConfig.tsx";
import {formatDate} from "@/shared/lib/formatDate/formatDate.ts";

interface RepositoryCardProps {
    id: string;
    name: string;
    stars: number;
    link: string;
    lastCommit: string;
    className?: string;
}

const RepositoryCard = (props: RepositoryCardProps) => {
    const {
        id,
        name,
        stars,
        link,
        lastCommit,
        className
    } = props;

    return (
        <div className={classNames(cls.Repository, {}, [className])}>
            <Link to={RoutePath.repository_details + id}>
                <h2>{name}</h2>
            </Link>

            <div>
                <span>Stars:</span>
                <span>{stars}</span>
            </div>

            <div>
                <span>Last commit:</span>
                <span>{formatDate(lastCommit)}</span>
            </div>

            <div>
                <span>Link to the github repo:</span>
                <a href={link}>{link}</a>
            </div>
        </div>
    )
}
export default RepositoryCard;