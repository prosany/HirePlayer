import React from 'react';
import './Header.css';
import logo from '../../Data/logo-white.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faQuestionCircle, faInfoCircle} from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    return (
        <div>
            <header>
                <div className="container">
                    <div className="logo">
                        <a href="/">
                            <img src={logo} alt=""/>
                        </a>
                    </div>
                    <nav className="menu">
                        <a href="/"><FontAwesomeIcon icon={faHome} /> Home</a>
                        <a href="/players"><FontAwesomeIcon icon={faUser} /> Players</a>
                        <a href="/contact">Contact Us <FontAwesomeIcon icon={faQuestionCircle} /></a>
                        <a href="/contact">Support <FontAwesomeIcon icon={faInfoCircle} /></a>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Header;