import Layout from "../components/AllPageLayout/Layout"
import './About.scss'
const page = () => {
  return (
    <Layout heading="A little bit about me" subheading="Who I am and what I do.">
        <div className="about">
            <div className="section left_section">
                <div className="heading">WHO I AM</div>
                <div className="paragraph">I’m <span className="highlight">Ryal</span> (Pronounced “RAI-AL”) a talented full-stack developer with a growing interest in UI design based in udupi, Karnataka.</div>

                <div className="heading">WHAT I DO</div>
                <div className="paragraph">With Two years of invaluable experience as a software developer at Arisecraft Technologies –– a tech startup company based here in Udupi, I have honed my skills in React.js, Express.js, TypeScript, RDBMS, MongoDB and so on... allowing me to craft seamless and interactive user experiences. During my time at Arisecraft Technologies, I had the privilege of working on projects for great clients. It was an really rewarding experience.</div>
                <div className="heading">WHAT I DID</div>
                <div className="paragraph">Before becoming a full stack developer , I have worked intensely on frontend.  developing landing pages with excellent animations and responsiveness. As a full stack developer I've developed many web applications with required functionality including payment gateways. As a result, I am adept at seamlessly integrating functionality with outstanding UI, including animations, in the web applications and websites I've created.</div>
                <div className="heading"></div>
                <div className="paragraph">Feel free to reach out via <a target="_blank"  href="mailto:ryalrafter2001@gmail.com" className="highlight underline">e-mail</a>. Want to see where I’ve worked? Check out my <a target="_blank" href="/resume.pdf" className="highlight underline">Resume</a>, or Connect with me on <a target="_blank"  href="https://www.linkedin.com/in/ryal-amanna-99a263232/" className="highlight underline">LinkedIn</a>.</div>    
                <div className="heading"></div>
                <div className="heading"></div>
                <p className="paragraph">Let’s build something great,</p>
                <img className='signature' src="signature.png" alt="" />
            </div>
            <div className="section">
                <div className="frame">
                    <img src="/ryal.png" alt="" />
                    {/* <img src="/geist.png" alt="" /> */}
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default page