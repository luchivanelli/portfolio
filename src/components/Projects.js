import '../styles/projects.css'
import img1 from '../images/calculator.png'
import img2 from '../images/infoplayer.png'
import img3 from '../images/todolist.png'
import img4 from '../images/pia.png'
import Project from './Project'

const projects = [
    {img: img1, name: 'Friends Calculator', skills: 'React (react-router-dom, formik) - Sass', deploy: 'https://luchivanelli.github.io/calculator/', repository: 'https://github.com/luchivanelli/calculator'},
    {img: img2, name: 'Infoplayer', skills: 'React - Bootstrap - API (thesportsdb)', deploy: 'https://luchivanelli.github.io/infoplayer/', repository: 'https://github.com/luchivanelli/infoplayer'},
    {img: img3, name: 'To do list', skills: 'React (redux toolkit) - Sass - BEM methodology', deploy: 'https://luchivanelli.github.io/todolist/', repository: 'https://github.com/luchivanelli/todolist'},
    {img: img4, name: 'PIA', skills: 'HTML - CSS', deploy: 'https://luchivanelli.github.io/LandingPagePIA/', repository: 'https://github.com/luchivanelli/LandingPagePIA'}
]

const Projects = ()=> {
    return(
        <div className="projects d-flex justify-content-center align-items-center" id='projects'>
            <h3 className="projects-title section-title">Projects</h3>
            <div className='projects-container container p-3'>
                <div className='row g-4'>
                    {projects.map((project)=> {
                        return (
                            <Project 
                                key={project.name}
                                img={project.img} 
                                name={project.name} 
                                skills={project.skills}
                                deploy={project.deploy}
                                repository={project.repository}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Projects