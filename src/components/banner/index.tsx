import { scrollToSection } from '../../helpers/utils/scrollToSection';
import Button from '../button';
import Typography from '../typography';

const textContent = {
    title: 'Test assignment for front-end developer',
    description:
        "What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.",
    buttonText: 'Sign Up',
};
const Banner = () => {
    return (
        <div className="banner__row">
            <div className="banner__content">
                <div className="banner__content-text">
                    <Typography type="h1">{textContent.title}</Typography>
                    <Typography type="p1">{textContent.description}</Typography>
                </div>
                <Button type="yellow" onClick={() => scrollToSection('signup')}>
                    {textContent.buttonText}
                </Button>
            </div>
        </div>
    );
};

export default Banner;
