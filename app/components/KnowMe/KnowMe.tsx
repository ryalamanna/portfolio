import Link from 'next/link';
import s from './KnowMe.module.scss';
import { Style } from 'util';
const KnowMe = () => {
  return (
    <section className={s.knowMe}>
        <h2 className='font-bold'>Get to know me</h2>
        <div className={s.cardWrapper}>
            <SingleCard
                h = 'About me'
                p = 'Who I am and what I do'
                i = '/meAni.png'
                class= 'first-card'
                link='/about'
            />
            <SingleCard
                h = 'Projects'
                p = 'Showcasing Some Notable Digital Creations'
                i = '/proj.png'
                link='/projects'
            />
            <SingleCard
                h = 'Hobbies'
                p = 'Passions Beyond the Pixel: Exploring Creativity'
                i = '/hobbie.png'
                link='/travel-blogs'
            />
            <SingleCard
                h = 'Tech Stack'
                p = 'The dev tools, apps and devices I use'
                i = '/techstack.png'
                link = '/tech-stack'
            />
        </div>
        <Contact/>
    </section>
  )
}

const SingleCard = ( props : {h : string ; p : string ; i : string ; class ?: string; link ?: string}) => {
    return (
        <Link href={props.link || ''} className={` ${s.card} ${props.class} hover_scale`}>
            <h3 className='font-bold'>{props.h}</h3>
            <p>{props.p}</p>
            <img src={props.i} alt="" />
        </Link>
    )
}

const Contact = () => {
    return (
        <section className={s.contact}>
            <div>
                <h2 className='font-bold'>Let’s work together</h2>
                <p>Want to discuss an opportunity to create something great? I’m ready when you are.</p>
            </div>
            <div className={s.right}>
                <a className={`${s.btn} dddBtn hover_scale`} href="/contact"><img src="/contactCta.png" alt="" />Get in touch</a>
            </div>
        </section>
    )
}

export default KnowMe