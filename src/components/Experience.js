import '../styles/experience.css'
import img from '../images/luciana-micaela-vanelli-bn.jpg'
import img2 from '../images/luciana-micaela-vanelli.jpg'
import { useRef } from 'react'

const Experience = ()=> {
    const certificate = useRef()

    const toggleCertificate = ()=> {
        certificate.current.classList.toggle('certificate-open')
    }

    return (
        <div className="experience d-flex justify-content-center align-items-center" id='experience'>
            <h3 className="experience-title section-title">Experience</h3>
            <div className='experience-content'>
                <div className='experience-content-title d-flex align-items-center justify-content-between'>
                    <h3>Inkua (NGO)</h3>
                    <p>Sep 2022 - Mar 2023</p>
                </div>
                <div className='experience-content-description d-flex justify-content-center'>
                    <h4>Professional practices in systems</h4>
                    <p>Development and layout of responsive web pages. Teamwork using Git, Github and Trello.</p>
                    <div onClick={toggleCertificate} className='certificate d-flex justify-content-center'><img src={img} alt='certificate-inkua'/></div>
                </div>
                <div className='experience-project'>
                    <h3 className='experience-project-title'>Project carried out during the internship:</h3>
                    <div className='experience-project-content'>
                        <h4>Horses in freedom</h4>
                        <p>Skills: <b>HTML, CSS, JavaScript</b></p>
                        <div className='experience-links d-flex justify-content-center align-items-center'>
                            <a target='_blank' href='https://manuel14mds.github.io/viewinkua/'>Deploy</a>
                            <a target='_blank' href='https://github.com/inkua/information-technology-it-workspace/tree/main/projects/caballos-en-libertad'>Repository</a>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={toggleCertificate} ref={certificate} className='certificate-modal'><img src={img2}/></div>
        </div>
    )
}

export default Experience