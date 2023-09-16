import '../styles/skills.css'

const Skill = ({name, icon, experience})=> {
    return (
        <div className="skill d-flex align-items-center">
            <p translate='no'>{name}</p>
            <div className='d-flex'>
                <p className='skill-experience'>{experience}</p>
                {icon}
            </div>
        </div>
    )
}

export default Skill