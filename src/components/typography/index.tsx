type TypographyVariants = 'h1' | 'p1' | 'h2';

type TypographyProps = {
    type?: TypographyVariants;
    className?: string;
    children: React.ReactNode;
};

const Typography = ({ type = 'p1', children, className }: TypographyProps) => {
    const Component = type === 'p1' ? 'p' : type;
    return (
        <Component className={`${type} ${className || ''}`}>
            {children}
        </Component>
    );
};

export default Typography;
