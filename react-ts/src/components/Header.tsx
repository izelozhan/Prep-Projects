import type {ReactNode} from "react";

interface HeaderProps {
    image: {
        src: string;
        alt: string;
    };
    children?: ReactNode;
}

export default function Header({image, children}: HeaderProps) {
    return <header className="Header">
        <img {...image}/>
        {children}
    </header>
}