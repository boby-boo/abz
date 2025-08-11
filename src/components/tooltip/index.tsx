import Typography from '../typography';

type TooltipProps = {
    title: string;
};

const Tooltip = ({ title }: TooltipProps) => {
    return (
        <div className="tooltip">
            <Typography type="p1">{title}</Typography>
        </div>
    );
};

export default Tooltip;
