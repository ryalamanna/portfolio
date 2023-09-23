'use client'
import { FormEvent, useState } from 'react'
import './Contact.scss'
import Layout from '../components/AllPageLayout/Layout'
import axios from '../helper/axios'
const page = () => {
  const [cardVibrate , setCardVibrate] = useState(false);
  const [data , setData] = useState({
    name : '',
    email : '',
    subject : '',
    message : '',
  })
  const [loading ,setLoading] = useState(false);
  const handleNavClick = () => {
    setCardVibrate(true);
    setTimeout(()=>{
      setCardVibrate(false);
    },1000)
  }
  const handleSUbmit = async (e : any) => {
    e.preventDefault();
    setLoading(true);
    e.currentTarget.classList.add('validated')
    if(e.currentTarget.checkValidity()){
      const res = await axios.post('/sendEmail' , {
        email : data.email,
        message : data.message , 
        subject : data.subject,
        name : data.name
      })
      console.log(res.status);
      
      if(res.status === 200){
        alert('Message sent successfully.');
      } else{
        alert('Failed to send message');
      }
    }
    setLoading(false)
  }

  const handleChange = (e : any) => {
    setData({...data , [e.currentTarget.name] : e.currentTarget.value})
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
                <form noValidate onSubmit={handleSUbmit}>
                  <div className="input_wrapper">
                    <label>Email:</label>
                    <input required type="email" placeholder='Enter your email address' name='email' onChange={handleChange} />
                  </div>
                  <div className="input_wrapper">
                    <label>Name:</label>
                    <input required type="text" placeholder='Enter your name' name='name' onChange={handleChange} />
                  </div>
                  <div className="input_wrapper">
                    <label>Subject:</label>
                    <input required type="text" placeholder='Enter subject' name='subject' onChange={handleChange} />
                  </div>
                  <textarea required id="" placeholder='Writer your message here' name='message' onChange={handleChange}></textarea>
                  <div className="btn_wrapper">
                    <button className='dddBtn hover_scale' type="submit">{
                      loading ? 'Sending...' : 'Send'
                    }</button>
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