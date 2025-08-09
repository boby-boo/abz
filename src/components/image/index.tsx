import { useCallback } from 'react';
import PhotoCoverSvg from '../../assets/photo-cover.svg';

type ImageProps = {
    src: string | undefined;
    alt: string;
    className?: string;
};

const Image = ({ src, alt, className }: ImageProps) => {
    const checkPhoto = useCallback((photo: string | undefined) => {
        if (!photo) return true;
        return photo.includes('placeholders');
    }, []);

    const isPhotContainsPlaceholder = checkPhoto(src);

    return (
        <img
            src={isPhotContainsPlaceholder ? PhotoCoverSvg : src}
            alt={alt}
            className={`image ${className}`}
        />
    );
};

export default Image;
