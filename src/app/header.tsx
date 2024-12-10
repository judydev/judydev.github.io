import Link from "next/link";
import Image from "next/image";
import avatar from '../assets/avatar.png';

export default function Header({size=160, children}: {size?: number, children?: React.ReactNode}) {
    return (
        <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <Image
                src={avatar}
                width={size + 10} height={size}
                alt="Avatar"
            /> 
            {children}
        </Link>
    );
}
