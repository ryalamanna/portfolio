import GoUp from '../GoUp/GoUp';
import './Footer.scss';

const Footer = () => {
    return (
        <div className="globalContainer">
            <section className="main_footer section">
                <div className="first">
                    <h2 className="font-bold">RYAL</h2>
                    <p className="thanks font-regular">
                        Thanks for stopping by ッ
                    </p>
                </div>
                <div className="section">
                    <ul>
                        <li className="head font-bold">Link</li>
                        <li className="font-regular">
                            <a href="/about">About</a>
                        </li>
                        <li className="font-regular">
                            <a href="/work">Work</a>
                        </li>
                        <li className="font-regular">
                            <a href="/tech-stack">Tech Stack</a>
                        </li>
                        <li className="font-regular">
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="section">
                    <ul>
                        <li className="head font-bold">Elsewhere</li>
                        <li className="font-regular">
                            <a href="">Email</a>
                        </li>
                        <li className="font-regular">
                            <a href="">LinkedIn</a>
                        </li>
                        <li className="font-regular">
                            <a href="">GitHub</a>
                        </li>
                        <li className="font-regular">
                            <a href="">Twitter</a>
                        </li>
                        <li className="font-regular">
                            <a href="">Discord</a>
                        </li>
                    </ul>
                </div>
                <GoUp />
            </section>
        </div>
    );
};

export default Footer;
