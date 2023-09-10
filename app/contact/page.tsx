'use client'
import { useState } from 'react'
import './Contact.scss'
import Layout from '../components/AllPageLayout/Layout'
const page = () => {
  const [cardVibrate , setCardVibrate] = useState(false)
  const handleNavClick = () => {
    setCardVibrate(true);
    setTimeout(()=>{
      setCardVibrate(false);
    },1000)
  }
  return (
    <>
        <Layout heading='Get in touch' subheading='Let’s build something awesome.'>
          <div className="contact">
              {/* <h1 className='font-bold'>Get in touch</h1> */}
              {/* <p className="sub_head font-regular">Let’s build something awesome.</p> */}
              {/* <hr className="main_divider" /> */}
              <div className={`card_main ${cardVibrate ? 'vibrate' : ''}`}>
                <p className="heading font-regular">New message</p>
                <div className='nav_dot_wrapper' onClick={handleNavClick}>
                  <div className='nav_dot dot1'></div>
                  <div className='nav_dot dot2'></div>
                  <div className='nav_dot dot3'></div>
                </div>
                <hr className='head_divider' />
                <form>
                  <div className="input_wrapper">
                    <label>Email:</label>
                    <input required type="email" placeholder='Enter your email address' />
                  </div>
                  <div className="input_wrapper">
                    <label>Name:</label>
                    <input type="text" placeholder='Enter your name' />
                  </div>
                  <div className="input_wrapper">
                    <label>Subject:</label>
                    <input type="text" placeholder='Enter subject' />
                  </div>
                  <textarea name="" id="" placeholder='Writer your message here'></textarea>
                  <div className="btn_wrapper">
                    <button className='dddBtn hover_scale' type="submit">Send</button>
                  </div>
                </form>
              </div>
              <div className="social_main">
                <a href=""><img src="/email.png" alt="" /></a>
                <a href=""><img src="/resume.png" alt="" /></a>
                <a href=""><img src="/Linkedin.png" alt="" /></a>
                <a href=""><img src="/Github.png" alt="" /></a>
              </div>
          </div>
        </Layout>
    </>
  )
}

export default page