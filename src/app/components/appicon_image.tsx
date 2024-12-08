import Image, { StaticImageData } from "next/image";

export enum AppIconSize {
    LARGE = 80,
    MEDIUM = 60,
    SMALL = 40
}

export default function AppIconImage({ src, alt, size = AppIconSize.MEDIUM }: 
    { src: StaticImageData, alt: string, size?: AppIconSize }) {

    return <Image src={src} alt={alt} width={size} height={size} style={{ borderRadius: '10px' }} />;
}