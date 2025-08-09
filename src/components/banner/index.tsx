import { scrollToSection } from '../../helpers/utils/scrollToSection';
import Button from '../button';
import Typography from '../typography';
import { Fade } from 'react-awesome-reveal';

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
                    <Fade>
                        <Typography type="h1">{textContent.title}</Typography>
                    </Fade>
                    <Fade delay={300}>
                        <Typography type="p1">
                            {textContent.description}
                        </Typography>
                    </Fade>
                </div>
                <Fade delay={500}>
                    <Button
                        type="yellow"
                        onClick={() => scrollToSection('signup')}
                    >
                        {textContent.buttonText}
                    </Button>
                </Fade>
            </div>
        </div>
    );
};

export default Banner;
