import styles from './Nav.module.css';
import Link from 'next/link';
const Nav = () => {
    return (
        <div className="globalContainer">
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <Link href="/">RYAL</Link>
                </div>
                <ul>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    {/* <li>
                        <Link href="/work">Work</Link>
                    </li> */}
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link href="/tech-stack">Tech Stack</Link>
                    </li>
                    <li>
                        <Link href="/travel-blogs">Travel Blogs</Link>
                    </li>
                </ul>
                <ul className={styles.social}>
                    <li>
                        <Link target="_blank" href="https://www.linkedin.com/in/ryal-amanna-99a263232/">
                            <img src="/Linkedin.png" alt="" />
                        </Link>
                    </li>
                    {/* <li>
                        <Link href="#">
                            <img
                                className={styles.noInverse}
                                src="/X.png"
                                alt=""
                            />
                        </Link>
                    </li> */}
                    <li>
                        <Link target="_blank" href="https://github.com/ryalamanna">
                            <img src="/Github.png" alt="" />
                        </Link>
                    </li>
                    {/* <li>
                        <img src="/Line9.png" alt="" />
                    </li> */}
                    {/* <li>
                        <Link href="">
                            <img src="/Sun.png" alt="" />
                        </Link>
                    </li> */}
                </ul>
            </nav>
        </div>
    );
};

export default Nav;
