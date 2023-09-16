import '../styles/skills.css'
import { IconBrandHtml5, IconBrandCss3, IconBrandJavascript, IconBrandBootstrap, IconBrandSass, IconBrandReact, IconBrandGit, IconBrandGithub } from '@tabler/icons-react';
import Skill from './Skill';

const skills = [
    {name: 'HTML', icon: <IconBrandHtml5/>, experience: '2 year'},
    {name: 'CSS', icon: <IconBrandCss3/>, experience: '2 year'}, 
    {name: 'JavaScript', icon: <IconBrandJavascript/>, experience: '2 year'},
    {name: 'Sass', icon: <IconBrandSass/>, experience: '6 months'},
    {name: 'Bootstrap', icon: <IconBrandBootstrap/>, experience: '6 months'},
    {name: 'React', icon: <IconBrandReact/>, experience: '1 year'},
    {name: 'Git', icon: <IconBrandGit/>, experience: '1 year'},
    {name: 'GitHub', icon: <IconBrandGithub/>, experience: '1 year'}
]

const Skills = ()=> {
    return (
        <div className='skills d-flex justify-content-center align-items-center' id='skills'>
            <h3 className='skills-title section-title'>Skills</h3>
            <h5>Hover to view experience</h5>
            {skills.map((skill)=> {
                return (
                    <Skill key={skill.name} name={skill.name} icon={skill.icon} experience= {skill.experience} />
                )
            })}
            <a href='https://drive.google.com/drive/folders/1yZ3sYJ9OwhllHBgLWpRxFmeLxV0f4uwq?usp=drive_link' className='skills-certificates' target='_blank'>View certificates</a>
        </div>
    )
}

export default Skills