import Typography from "../typography";
import successfullBanner from '../../assets/success-image.svg';

type SuccessBannerProps = {
    title?: string
}

const SuccessBanner = ({ title = 'User successfully registered'}: SuccessBannerProps) => {
    return (
        <div className="successfull-banner">
            <div className="container">
                <div className="successfull-banner__row">
                        <Typography type="h2">{title}</Typography>
                        <img src={successfullBanner} alt="successfull-banner" />
                </div>
            </div>
        </div>
    )
}

export default SuccessBanner;