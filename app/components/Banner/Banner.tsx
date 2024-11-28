import React from 'react'
import Styles from './Banner.module.scss'
const Banner = () => {
  return (
    <header className={Styles.banner}>
        <div className={Styles.rightImgPhone}>
            <img src="/ryal.png" alt="" />
        </div>
        <div className="left">
            <h1><span className={Styles.highlight}>I’m</span> Ryal Rafter</h1>
            <p className={Styles.subHead}>I am a dynamic full-stack developer with nearly a year of hands-on experience, proficient in crafting cutting-edge and responsive websites and web applications that seamlessly integrate functionality and design.
            </p>
            <button className='dddBtn'>See my resume</button>
            <button>Get in touch</button>
        </div>
        <div className={Styles.right}>
            <img src="/ryal.png" alt="" />
        </div>
    </header>
  )
}

export default Banner