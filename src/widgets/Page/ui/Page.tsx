import {ReactNode} from "react";
import cls from './Page.module.scss'

interface PageProps {
    children: ReactNode
}

const Page = (props: PageProps) => {
    const {
        children
    } = props;

    return (
        <div className={cls.page}>
            {children}
        </div>
    )
}

export default Page