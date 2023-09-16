import '../styles/projects.css'

const Project = ({img, name, skills, deploy, repository})=> {
    return (
        <div className="project col-12 col-sm-6 d-flex flex-column justify-content-between">
            <div className='project-img-container'><img src={img}/></div>
            <h3>{name}</h3>
            <p>{skills}</p>
            <div className='project-links d-flex justify-content-evenly align-items-center'>
                <a href={deploy} target='_blank'>Deploy</a>
                <a href={repository} target='_blank'>Repository</a>
            </div>
        </div>
    )
}

export default Project