import LogoIcon from '../../assets/logo.svg';
import { scrollToSection } from '../../helpers/utils/scrollToSection';
import Button from '../button';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <a href="/" className="header__logo">
                        <img src={LogoIcon} alt="logo" />
                    </a>
                    <nav className="header__menu">
                        <ul className="header__menu-list">
                            <li className="header__menu-item">
                                <Button
                                    type="yellow"
                                    onClick={() => scrollToSection('clients')}
                                >
                                    Users
                                </Button>
                            </li>
                            <li className="header__menu-item">
                                <Button
                                    type="yellow"
                                    onClick={() => scrollToSection('signup')}
                                >
                                    Sign Up
                                </Button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
