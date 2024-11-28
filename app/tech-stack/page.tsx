'use client';
import { useState } from 'react';
import Layout from '../components/AllPageLayout/Layout';
import './tech-stack.scss';

const page = () => {
    const tech_list = [
        {
            img : '/react.webp',
            title : 'React.js',
            subTitle : 'Web Library',
            class : 'img_border'
        },
        {
            img : '/preact.png',
            title : 'Preact.js',
            subTitle : 'Web Library',
            class : 'preact'
        },
        {
            img : '/node.png',
            title : 'Express.js',
            subTitle : 'web Framework',
        },
        {
            img : '/mysql.png',
            title : 'MySQL',
            subTitle : 'Database',
        },
        {
            img : '/js.png',
            title : 'JavaScript',
            subTitle : 'Language',
            class : 'img_border'
        },
        {
            img : '/ts.png',
            title : 'TypeScript',
            subTitle : 'Language'
        },
        {
            img : '/Nextjs.png',
            title : 'Next.js',
            subTitle : 'Web Framework',
        },
        {
            img : '/GitHub1.png',
            title : 'GitHub',
            subTitle : 'Version Control',
        },
        {
            img : '/bootstrap.png',
            title : 'Bootstrap',
            subTitle : 'CSS Framework',
            class : 'bootstrap'
        },
        {
            img : '/angular.png',
            title : 'Angular',
            subTitle : 'Web Framework',
        },
        {
            img : '/jquery.png',
            title : 'jQuery',
            subTitle : 'Web Library',
        },
        {
            img : '/wp.webp',
            title : 'Wordpress',
            subTitle : 'Web CMS',
        },
        {
            img : '/gtm.png',
            title : 'GTM',
            subTitle : 'Tag manager',
            class : 'img_border'
        },
        {
            img : '/scio.png',
            title : 'Socket.io',
            subTitle : 'Web Library',
        },
        {
            img : '/sass.png',
            title : 'SASS',
            subTitle : 'CSS pre-processor',
        },
        {
            img : '/tailwind.png',
            title : 'Tailwind CSS',
            subTitle : 'CSS Framework',
        },
        {
            img : '/VSCode.png',
            title : 'VSCode',
            subTitle : 'Editor',
        },
        {
            img : '/ChatGPT.png',
            title : 'ChatGPT',
            subTitle : 'Productivity',
        },
    ]
  return (
    <Layout heading='Tech Stack' subheading='The Language , Libraries , frameworks , dev tools and apps i use.'>
        <div className='tech_stack cardWrapper'>
            {
                tech_list.map(obj => {return (
                    <SingleCard img={obj.img} title={obj.title} subTitle={obj.subTitle} class={obj.class}/>
                )})
            }
        </div>
    </Layout>
  )
}

const SingleCard = (props :{ img : string , title : string , subTitle : string , class ?: string}) => {
    const [ vibrate , setVibrate] = useState('');
    function handleClick() {
        setVibrate('vibrate');
        setTimeout(() => {
            setVibrate('');
        }, 2000);
    }

    return (
        <>
            <div className={`${props.class} single_card ${vibrate}`} onClick={handleClick}>
                <img src={props.img} alt="" />
                <div className="footer">
                    <p className='font-medium'>{props.title}</p>
                    <small className='font-regular'>{props.subTitle}</small>
                </div>
            </div>
        </>
    )
}
export default page