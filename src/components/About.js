import { IconBrandGithub, IconBrandLinkedin, IconMail, IconFileCv } from '@tabler/icons-react';
import '../styles/about.css'
import CV from '../CV.pdf'

const About = ()=> {
    return (
        <div className="about d-flex justify-content-center aling-items-center">
            <div className="about-card">
                <h3 className="card-title">About me</h3>
                <p className='card-p'>Junior web developer, specialized in React. I studied Systems Engineering for 2 years at the National Technological University of Rosario</p>
                <p className='card-p'>Self-taught person eager to grow and acquire new skills. I take courses to improve myself and thus, be able to insert myself into the world of work.</p>
                <div className="card-social d-flex flex-wrap justify-content-center">
                    <a href='https://github.com/luchivanelli' target='_blank'><IconBrandGithub/>GitHub</a>
                    <a href='https://www.linkedin.com/in/luciana-vanelli/' target='_blank'><IconBrandLinkedin/>LinkedIn</a>
                    <a href='mailto:lucianavanelli13@gmail.com' target='_blank'><IconMail/>Gmail</a>
                    <a href={CV} download target='_blank'><IconFileCv/>CV</a>
                </div>
            </div>
        </div>
    )
}

export default About