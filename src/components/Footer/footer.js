import React from "react";
// import { Link } from "gatsby";

import linkedin from '../../../content/assets/icon__linkedin.png'
import twitter from '../../../content/assets/icon__twitter.png'
import instagram from '../../../content/assets/icon__instagram.png'


const Footer = () => (
    <footer className="footer">
        <div className="footer__wrapper">
            <nav className="footer__nav">
                <ul className="footer__navList">
                    <li className="footer__navItem"><a href="" target="_blank">ABOUT</a></li>
                    <li className="footer__navItem--forrow"><a href="" target="_blank"><img
                        src={linkedin} alt="" /></a>
                    </li>
                    <li className="footer__navItem--forrow"><a href="https://www.instagram.com/mayu_cuuuu/"
                        target="_blank"><img src={instagram} alt="" /></a>
                    </li>
                    <li className="footer__navItem--forrow"><a href="" target="_blank"><img src={twitter}
                        alt="" /></a>
                    </li>
                    <li className="footer__navItem--forrow"><a href="" target="_blank"><img src="images/footer__git.png"
                        alt="" /></a></li>
                </ul>
            </nav>
            <div className="footer__copy">
                <p>Copyright &copy; 2019 signalog All Rights Reserved.</p>
            </div>
        </div>
    </footer>
)

export default Footer